import logo from "../../assets/icons/chart.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface HeaderSideBarMenuProps {
  title: string;
  hideSubMenu?: boolean;
  onClick?: () => void;
  route?: string;
  icons?: string;
}

const HeaderSideBarMenu = (props: HeaderSideBarMenuProps) => {
  return (
    <NavLink
      to={props.route || "#"}
      className={clsx(
        "flex items-center justify-between cursor-pointer py-1 px-2 rounded-[4px] transition-all duration-200 ",
        props.hideSubMenu && "hover:bg-[#F5F5F5] hover:text-[#000]"
      )}
      onClick={props.onClick}
    >
      <div className="flex items-center gap-2">
        <img
          src={props.icons ? props.icons : logo}
          alt="logo"
          className="w-[20px]"
        />
        <h2>{props.title}</h2>
      </div>
      {!props.hideSubMenu && (
        <img src={arrowDown} alt="arrow-down" className="w-[12px] " />
      )}
    </NavLink>
  );
};

export default HeaderSideBarMenu;
