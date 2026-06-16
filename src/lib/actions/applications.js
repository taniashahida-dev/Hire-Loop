'use server'

import { ServerMutation } from "../core/server"

export const SubmitApplication = async(applicationData)=>{
    return await ServerMutation("/job-applications",applicationData)
}