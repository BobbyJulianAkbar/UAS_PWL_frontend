import SideBarLogo from "../components/logos/SideBarLogo";
import SideBarMenu from "../components/menus/SideBarMenu";
import { useSignOut } from "react-auth-kit";
import {
  subMenusAnggota,
  subMenusBuku,
  subMenusPeminjaman,
  subMenusPetugas,
} from "../constants/sidebarSubMenu";

import userIcon from "../assets/icons/user.png";
import groupUsersIcon from "../assets/icons/group-users.png";
import gridIcon from "../assets/icons/grid.png";

const SideBarAdmin = () => {
  const signOut = useSignOut();

  return (
    <aside className="min-h-screen bg-secondary min-w-max px-4 py-8 sticky top-0 left-0 overflow-y-hidden">
      <SideBarLogo />
      <div className="mt-8">
        <ul>
          <li>
            <p className="font-bold">DASHBOARD</p>
            <SideBarMenu
              title="Dashboard"
              hideSubMenu={true}
              route="/dashboard"
            />
          </li>
          <li>
            <p className="font-bold">PENGOLAHAN PETUGAS</p>
            <SideBarMenu
              title="Petugas"
              subMenus={subMenusPetugas}
              icons={groupUsersIcon}
            />
            <SideBarMenu
              title="Anggota"
              subMenus={subMenusAnggota}
              icons={userIcon}
            />
          </li>
          <li>
            <p className="font-bold">PENGOLAHAN BUKU</p>
            <SideBarMenu
              title="Buku"
              subMenus={subMenusBuku}
              icons={gridIcon}
            />
            <SideBarMenu
              title="Peminjaman"
              subMenus={subMenusPeminjaman}
              icons={gridIcon}
            />
          </li>
        </ul>
      </div>
      <button
        className="absolute bottom-4 px-2 py-1 bg-red-200 min-w-[200px] rounded-lg text-red-500 hover:bg-red-400 transition-all hover:text-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </aside>
  );
};

export default SideBarAdmin;
