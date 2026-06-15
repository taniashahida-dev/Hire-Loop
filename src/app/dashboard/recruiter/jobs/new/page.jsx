import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import PostJobsForm from "./PostJobsForm";


const PostJobs = async() => {


    const company = await getLoggedInRecruiterCompany()
    return (
        <div>
            <PostJobsForm company={company}></PostJobsForm>
        </div>
    );
};

export default PostJobs;