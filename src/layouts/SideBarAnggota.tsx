import { FaSearch } from "react-icons/fa";
import SideBarLogo from "../components/logos/SideBarLogo";
import { useSignOut } from "react-auth-kit";
import { useCategories } from "../hooks/useCategories";

const SideBarAnggota = () => {
  const signOut = useSignOut();

  const { data, isLoading, error } = useCategories();

  return (
    <aside className="min-h-screen bg-secondary min-w-max px-4 py-8 sticky top-0 left-0 overflow-y-hidden">
      <SideBarLogo />
      <div className="mt-8">
        <h1 className="font-bold">Cari Buku : </h1>
        <div className="flex mt-8 ">
          <input
            type="text"
            placeholder="Cari Buku Favoritmu"
            className="py-2 px-4 rounded-s-[4px] w-[200px]"
          />
          <button className="py-2 px-4 bg-primary rounded-e-[4px] text-black font-bold text-[24px]">
            <FaSearch />
          </button>
        </div>
      </div>
      <h1 className="mt-8 font-bold">Kategori</h1>
      <div className="mt-8">
        <ul className="border max-w-[180px]">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            <>
              <li className="bg-white">
                <button className="border min-w-full text-left px-2 py-1 shadow-md">
                  Semua
                </button>
              </li>
              {data?.map((category) => (
                <li className="bg-white" key={category.id}>
                  <button className="border min-w-full text-left px-2 py-1 shadow-md">
                    {category.nama}
                  </button>
                </li>
              ))}
            </>
          )}

          {/* <li className="bg-white">
            <button className="border min-w-full text-left px-2 py-1 shadow-md">
              Semua
            </button>
          </li>
          <li className="bg-white">
            <button className="border min-w-full text-left px-2 py-1 shadow-md">
              Pendidikan
            </button>
          </li>
          <li className="bg-white">
            <button className="border min-w-full text-left px-2 py-1 shadow-md">
              Pengetahuan
            </button>
          </li> */}
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

export default SideBarAnggota;
