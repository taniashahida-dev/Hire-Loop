import { getJobs } from "@/lib/api/jobs";


const RecruiterJobs =async () => {
 const companyId = 'company_123'; 
const jobs = await getJobs(companyId) || []
console.log(jobs)
  return <div>


    jobs are :
    {
        jobs.length
    }
  </div>;
};

export default RecruiterJobs;
