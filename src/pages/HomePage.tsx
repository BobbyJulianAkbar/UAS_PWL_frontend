import NavBar from "../layouts/Navbar";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-primary min-h-screen">
        <div className="flex justify-center items-center flex-col min-h-screen max-w-7xl mx-auto">
          <h1 className="text-[84px] text-center font-kaushan text-white">
            Selamat Datang Di Poestaka Rakjat
          </h1>
          <h2 className="text-white font-bold text-[32px] mt-12">
            Cari Buku Favoritmu Disini
          </h2>

          <div className="flex mt-8 ">
            <input
              type="text"
              placeholder="Cari Buku Favoritmu"
              className="py-2 px-4 rounded-s-[4px] w-[800px]"
            />
            <button className="py-2 px-4 bg-[#42FFC6] rounded-e-[4px] text-black font-bold text-[24px]">
              <FaSearch />
            </button>
          </div>
          <button className="bg-[#28B3EF] text-white mt-8 py-1 w-[855px] rounded-[4px] font-semibold">
            <a href="#books">Lihat Semua Buku</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
