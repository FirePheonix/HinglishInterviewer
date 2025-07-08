import {generateText} from "ai";
import {google} from "@ai-sdk/google";
import {db} from "@/firebase/admin";

export async function GET() {
    return Response.json({ success: true, data: 'THANK YOU!'}, { status: 200 });
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    console.log('📝 Received request:', {
        type, role, level, techstack, amount, userid,
        timestamp: new Date().toISOString()
    });

    try {
        const prompt = `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `;

        console.log('🤖 Sending to Gemini:', {
            prompt: prompt.substring(0, 100) + '...',
            model: 'gemini-2.0-flash-001',
            timestamp: new Date().toISOString()
        });

        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: prompt,
        });

        console.log('✅ Gemini response received:', {
            response: questions,
            responseLength: questions.length,
            timestamp: new Date().toISOString()
        });

        let parsedQuestions;
        try {
            parsedQuestions = JSON.parse(questions);
            console.log('✅ Questions parsed successfully:', parsedQuestions);
        } catch (parseError) {
            console.error('❌ Error parsing questions:', parseError);
            console.log('Raw response:', questions);
            throw new Error('Failed to parse questions from Gemini response');
        }

        const interview = {
            role, type, level,
            techstack: techstack.split(','),
            questions: parsedQuestions,
            userId: userid,
            finalized: true,
            createdAt: new Date().toISOString()
        }

        console.log('💾 Saving interview to database:', {
            interviewId: 'pending',
            userId: userid,
            questionsCount: parsedQuestions.length,
            timestamp: new Date().toISOString()
        });

        const docRef = await db.collection("interviews").add(interview);
        
        console.log('✅ Interview saved successfully:', {
            interviewId: docRef.id,
            userId: userid,
            timestamp: new Date().toISOString()
        });

        return Response.json({ success: true}, {status: 200})
    } catch (error) {
        console.error('❌ Error in POST /api/vapi/generate:', {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            timestamp: new Date().toISOString()
        });

        return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}