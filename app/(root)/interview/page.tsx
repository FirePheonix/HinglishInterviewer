import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-12">
                <h3 className="text-3xl font-semibold text-white text-center mb-8">Interview Generation</h3>

                <Agent userName={user?.name || 'User'} userId={user?.id || ''} type="generate" />
            </div>
        </div>
    )
}
export default Page
