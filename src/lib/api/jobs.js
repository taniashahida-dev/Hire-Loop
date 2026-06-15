


const server = process.env.SERVER_URL
export const getCompanyJobs = async(companyId, status = 'active')=>{
const res = await fetch(`${server}/jobs?companyId=${companyId}&status=${status}`)
return res.json()
}