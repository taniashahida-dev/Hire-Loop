import { fetchServer } from "../core/server";


export const getApplicationsByApplicant = async (applicantId) => {
    return fetchServer(`/job-applications?applicantId=${applicantId}`);
}