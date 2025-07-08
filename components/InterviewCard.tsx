import dayjs from 'dayjs';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { FileText, Calendar, Star } from 'lucide-react';

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

    return (
        <div className="w-[360px] max-sm:w-full min-h-96 bg-black border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-gray-800">
                    <p className="text-sm font-semibold capitalize text-white">{normalizedType}</p>
                </div>

                {/* Standard SVG Icon instead of random image */}
                <div className="w-[90px] h-[90px] bg-gray-900 rounded-full flex items-center justify-center mb-5">
                    <FileText className="w-10 h-10 text-white" />
                </div>

                <h3 className="mt-5 capitalize text-white text-xl font-semibold">
                    {role} Interview
                </h3>

                <div className="flex flex-row gap-5 mt-3">
                    <div className="flex flex-row gap-2 items-center">
                        <Calendar className="w-5 h-5 text-white" />
                        <p className="text-white">{formattedDate}</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Star className="w-5 h-5 text-white" />
                        <p className="text-white">{feedback?.totalScore || '---'}/100</p>
                    </div>
                </div>

                <p className="line-clamp-2 mt-5 text-white">
                    {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
                </p>
            </div>

            <div className="flex flex-row justify-between items-center mt-6">
                <DisplayTechIcons techStack={techstack} />

                <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-4 py-2 rounded-lg">
                    <Link href={feedback
                        ? `/interview/${interviewId}/feedback`
                        : `/interview/${interviewId}`
                    }>
                        {feedback ? 'Check Feedback' : 'View Interview'}
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default InterviewCard
