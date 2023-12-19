import { Outlet } from "react-router-dom";
import SideBarAdmin from "./SideBarAdmin";

import NavBarDashboard from "./NavBarDashboard";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <SideBarAdmin />
        <div className="h-[144px] min-w-full bg-primary -z-10 absolute overflow-y-hidden"></div>
        <div className="px-4 py-2 w-full">
          <NavBarDashboard />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
