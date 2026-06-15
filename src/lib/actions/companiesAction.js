"use server"

import { ServerMutation } from "../core/server"



export const createCompany = async(companyData)=>{
    return ServerMutation('/companies',companyData)
}