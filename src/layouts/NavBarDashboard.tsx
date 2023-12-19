import { useAuthUser } from "react-auth-kit";
import menu from "../assets/icons/menu.png";
import profile from "../assets/icons/person.png";
const NavBarDashboard = () => {
  const auth = useAuthUser();

  return (
    <>
      <div className="flex justify-between items-center">
        <img src={menu} alt="menu" />
        <button className="flex items-center gap-2">
          <img src={profile} alt="profile" />
          <h3 className="text-white font-bold">{auth()?.fnama}</h3>
        </button>
      </div>
    </>
  );
};

export default NavBarDashboard;
