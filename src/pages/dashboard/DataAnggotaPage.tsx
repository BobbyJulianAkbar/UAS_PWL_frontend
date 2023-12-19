import { Link } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import eyeIcon from "../../assets/icons/eye.png";
import penIcon from "../../assets/icons/pen.png";
import trashIcon from "../../assets/icons/bin.png";
import { useAnggotas } from "../../hooks/useAnggotas";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { mutate } from "swr";

const DataAnggotaPage = () => {
  const { data, isLoading, error } = useAnggotas();

  const handleDelete = (id: number) => {
    toast.promise(
      axiosInstance.delete(`api/v1/anggota?id=${id}`),
      {
        pending: "Loading...",
        success: {
          render() {
            mutate("api/v1/anggota");
            return `Berhasil dihapus`;
          },
        },
        error: "Gagal dihapus",
      },
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      }
    );
  };

  return (
    <>
      <HeaderDashboard title="Data Anggota" />

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <h1>Error</h1>
        </div>
      ) : (
        <div className="shadow-lg mt-4 border p-4">
          <Link
            to={"/dashboard/anggota/tambah"}
            className="bg-primary px-4 py-1 rounded-md text-white"
          >
            Tambah Anggota
          </Link>
          <div className="mt-4 flex justify-between">
            <div>
              <label htmlFor="offset">
                <span className="">Show </span>
              </label>
              <select
                name="offset"
                id="offset"
                className="pr-8 border shadow-md"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <span>Entries</span>
            </div>
            <div>
              <label htmlFor="offset">
                <span className="">Search : </span>
              </label>
              <input
                type="text"
                name="offset"
                id="offset"
                className="border shadow-lg"
              />
            </div>
          </div>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border shadow-md ">No</th>
                <th className="border shadow-md ">Id Anggota</th>
                <th className="border shadow-md ">Nama Lengkap</th>
                <th className="border shadow-md ">Email</th>
                <th className="border shadow-md ">Status</th>
                <th className="border shadow-md ">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((anggota, index) => (
                <tr key={anggota.id}>
                  <td className="border shadow-md ">{index + 1}</td>
                  <td className="border shadow-md ">{anggota.id}</td>
                  <td className="border shadow-md ">{anggota.nama}</td>
                  <td className="border shadow-md ">{anggota.email}</td>
                  <td className="border shadow-md ">Aktif</td>
                  <td className="border shadow-md">
                    <button className="">
                      <img
                        src={eyeIcon}
                        alt="lihat"
                        className="w-5 mr-2 mt-2"
                      />
                    </button>
                    <button className="">
                      <img src={penIcon} alt="edit" className="w-5 mr-2" />
                    </button>
                    <button
                      className=""
                      onClick={() => handleDelete(anggota.id)}
                    >
                      <img src={trashIcon} alt="delete" className="w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex  items-center mt-4">
            <p className="text-center ">
              Showing {data.length} to {data.length} of {data.length} entries
            </p>
            <div className="ml-auto border">
              <button className=" px-4 py-1  ">Prev</button>
              <button className=" px-4 py-1  bg-blue-600 text-white">1</button>
              <button className=" px-4 py-1  bg-blue-600 text-white">2</button>
              <button className=" px-4 py-1  ">Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataAnggotaPage;
