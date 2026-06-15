

import RecruiterJobsTable from "@/components/RecruiterJobsTable";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import { getCompanyJobs } from "@/lib/api/jobs";



const RecruiterJobs =async () => {
const company = await getLoggedInRecruiterCompany()
const jobs = await getCompanyJobs(company._id) || []
// console.log(jobs)

  
  return    <RecruiterJobsTable jobs={jobs}></RecruiterJobsTable>
};

export default RecruiterJobs;
