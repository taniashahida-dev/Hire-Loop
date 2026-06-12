"use server"

const server = process.env.SERVER_URL

export const postJobs = async(jobData)=>{
const res = await fetch(`${server}/jobs`,{
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
})
}