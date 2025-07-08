import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";
import Page from "./client-page";

const ServerPage = async () => {
    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({ userId: user?.id! })
    ]);

    return (
        <Page 
            userInterviews={userInterviews || []}
            latestInterviews={latestInterviews || []}
        />
    );
};

export default ServerPage;
