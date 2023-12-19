import { Link } from "react-router-dom";

interface SideBarSubMenuProps {
  title: string;
  href: string;
}

const SideBarSubMenu = (
  props: SideBarSubMenuProps = {
    title: "",
    href: "#",
  }
) => {
  return (
    <li>
      <Link to={props.href}>{props.title}</Link>
    </li>
  );
};

export default SideBarSubMenu;
