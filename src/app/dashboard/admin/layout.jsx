import { requiredRole } from "@/lib/core/session";


const Adminlayout = async({children}) => {

await requiredRole('admin')
    return children
};

export default Adminlayout;