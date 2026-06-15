'use server'
import { fetchServer } from "../core/server"



const server = process.env.SERVER_URL



export const getJobDetails = async(jobId)=>{
return  fetchServer(`/jobs/${jobId}`) 
}

export const getJobs = async()=>{
return  fetchServer(`/jobs`) 
}

export const getCompanyJobs = async(companyId, status = 'active')=>{
const res = await fetch(`${server}/jobs?companyId=${companyId}&status=${status}`)
return res.json()
}