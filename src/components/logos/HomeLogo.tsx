import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const HomeLogo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2  w-max">
      <img src={logo} alt="logo" />
      <h1 className="font-bold text-[24px]">Poestaka Rakjat</h1>
    </Link>
  );
};

export default HomeLogo;
