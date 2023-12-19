import { useState } from "react";
import HeaderSideBarMenu from "./HeaderSideBarMenu";
import clsx from "clsx";
import SideBarSubMenu from "./SideBarSubMenu";

interface SubMenu {
  title: string;
  href: string;
}

interface SideBarMenuProps {
  title: string;
  hideSubMenu?: boolean;
  route?: string;
  subMenus?: SubMenu[];
  icons?: string;
}

const SideBarMenu = (
  props: SideBarMenuProps = {
    title: "",
    hideSubMenu: false,
    route: "#",
  }
) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="ml-3 mt-2 mb-4">
      <HeaderSideBarMenu
        title={props.title}
        hideSubMenu={props.hideSubMenu}
        onClick={props.hideSubMenu ? undefined : handleShowSubMenu}
        route={props.route}
        icons={props.icons}
      />
      {!props.hideSubMenu && (
        <ul
          className={clsx(
            "transition-all duration-500 overflow-hidden ml-9 flex flex-col gap-2 mt-2",
            showSubMenu ? "max-h-0 " : "max-h-[200px] "
          )}
        >
          {props.subMenus?.map((subMenu, index) => (
            <SideBarSubMenu
              key={index}
              title={subMenu.title}
              href={subMenu.href}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBarMenu;
