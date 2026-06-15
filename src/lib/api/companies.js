import { fetchServer } from "../core/server"
import { getUserSession } from "../core/session"




export const getRecruiterCompany = async(recruiterId)=>{
  console.log("Recruiter ID:", recruiterId);
return  fetchServer(`/companies?recruiterId=${recruiterId}`)
}

export const getLoggedInRecruiterCompany =async ()=>{
    const user = await getUserSession()
    return  getRecruiterCompany(user?.id)
}
