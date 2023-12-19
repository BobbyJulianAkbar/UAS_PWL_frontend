import { Outlet } from "react-router-dom";
import NavBarDashboardAnggota from "./NavBarDashboardAnggota";
import SideBarAnggota from "./SideBarAnggota";

const DashboardAnggotaLayout = () => {
  return (
    <div className="flex items-start">
      <SideBarAnggota />
      <div className="h-[144px] min-w-full bg-primary -z-10 absolute overflow-y-hidden"></div>
      <div className="px-4 py-2 w-full">
        <NavBarDashboardAnggota />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardAnggotaLayout;
