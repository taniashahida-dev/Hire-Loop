import { requiredRole } from "@/lib/core/session";


const SeeketLayout =async ({children}) => {
await requiredRole('seeker')
    return children
};

export default SeeketLayout;