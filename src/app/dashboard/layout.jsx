'use client'
import { DashboardSidebar } from "@/components/dashboardComponents/DashboardSidebar";


const DashboardLayOut = ({children}) => {
    return (
        <div className="flex min-h-screen">
           <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
              {children}
          </div>
            
        </div>
    );
};

export default DashboardLayOut;