'use server'


const server = process.env.SERVER_URL
export const getJobs = async(companyId, status = 'active')=>{
const res = await fetch(`${server}/jobs?companyId=${companyId}&status=${status}`)
return res.json()
}