import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";
import Page from "./client-page";

const ServerPage = async () => {
    try {
        const user = await getCurrentUser();

        // Handle case where user might be null or undefined
        if (!user?.id) {
            return (
                <Page 
                    userInterviews={[]}
                    latestInterviews={[]}
                />
            );
        }

        // Add error handling for database queries
        const [userInterviews, latestInterviews] = await Promise.allSettled([
            getInterviewsByUserId(user.id),
            getLatestInterviews({ userId: user.id })
        ]);

        // Extract successful results or use empty arrays as fallback
        const userInterviewsData = userInterviews.status === 'fulfilled' ? userInterviews.value : [];
        const latestInterviewsData = latestInterviews.status === 'fulfilled' ? latestInterviews.value : [];

        return (
            <Page 
                userInterviews={userInterviewsData || []}
                latestInterviews={latestInterviewsData || []}
            />
        );
    } catch (error) {
        console.error('Error in ServerPage:', error);
        
        // Fallback: render page with empty data if there's any error
        return (
            <Page 
                userInterviews={[]}
                latestInterviews={[]}
            />
        );
    }
};

export default ServerPage;
