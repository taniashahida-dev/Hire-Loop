

import RecruiterJobsTable from "@/components/RecruiterJobsTable";
import { getJobs } from "@/lib/api/jobs";


const RecruiterJobs =async () => {
 const companyId = 'company_123'; 
const jobs = await getJobs(companyId) || []
// console.log(jobs)

  
  return    <RecruiterJobsTable jobs={jobs}></RecruiterJobsTable>
};

export default RecruiterJobs;
