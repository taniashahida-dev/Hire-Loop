

import RecruiterJobsTable from "@/components/RecruiterJobsTable";
import { getCompanyJobs } from "@/lib/api/jobs";



const RecruiterJobs =async () => {
 const companyId = 'company_123'; 
const jobs = await getCompanyJobs(companyId) || []
// console.log(jobs)

  
  return    <RecruiterJobsTable jobs={jobs}></RecruiterJobsTable>
};

export default RecruiterJobs;
