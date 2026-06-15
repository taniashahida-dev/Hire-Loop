"use server"

import { ServerMutation } from "../core/server"



export const postJobs = async(jobData)=>{
    return ServerMutation('/jobs',jobData)
}