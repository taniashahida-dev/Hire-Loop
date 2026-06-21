import { getApplicationsByApplicant } from "@/lib/api/applications";
import { getUserSession } from "../../../../lib/core/session";
import ApplicationsTable from "./ApplicationsTable";


const seekerApplicationsPage = async() => {
    const user = await getUserSession()
    const jobs = await getApplicationsByApplicant(user.id)
    return (
        <div>
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
            
        </div>
    );
};

export default seekerApplicationsPage;