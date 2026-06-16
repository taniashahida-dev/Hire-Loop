import { fetchServer } from "../core/server"

export const getPlans = async(planId)=>{

return  fetchServer(`/plans?plan_id=${planId}`)
}