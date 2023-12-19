import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const SideBarLogo = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <img src={logo} alt="logo" className="w-16 h-16" />
      <div>
        <h1 className="text-2xl font-bold text-black">Poestaka</h1>
        <h1 className="text-2xl font-bold text-black">Rakjat</h1>
      </div>
    </Link>
  );
};

export default SideBarLogo;
