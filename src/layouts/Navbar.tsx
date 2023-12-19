import { Link } from "react-router-dom";
import HomeLogo from "../components/logos/HomeLogo";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full shadow-md bg-white">
      <div className="flex max-w-7xl mx-auto justify-between items-center py-4 ">
        <HomeLogo />
        <div>
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">KATEGORI</Link>
            </li>
            <li>
              <Link to="/">TENTANG</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/dashboard-anggota">MASUK</Link>
            </li>
            <li>
              <Link to="/" className="bg-[#377AB7] text-white py-1 px-3">
                Daftar
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                to="/dashboard"
                className="bg-[#377AB7] text-white py-1 px-3"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
