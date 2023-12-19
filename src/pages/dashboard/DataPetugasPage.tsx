import { Link } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import eyeIcon from "../../assets/icons/eye.png";
import penIcon from "../../assets/icons/pen.png";
import trashIcon from "../../assets/icons/bin.png";
import { usePetugas } from "../../hooks/usePetugas";
import LoadingCard from "../../components/cards/LoadingCard";
import ErrorCard from "../../components/cards/ErrorCard";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { mutate } from "swr";

const DataPetugasPage = () => {
  const { data, isLoading, error } = usePetugas();

  const handleDelete = (id: number) => {
    toast.promise(
      axiosInstance.delete(`api/v1/petugas?id=${id}`),
      {
        pending: "Loading...",
        success: {
          render() {
            mutate("api/v1/petugas");
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
      <HeaderDashboard title="Data Petugas" />
      <div className="shadow-lg mt-4 border p-4">
        {isLoading ? (
          <LoadingCard />
        ) : error ? (
          <ErrorCard />
        ) : (
          <>
            <Link
              to={"/dashboard/petugas/tambah"}
              className="bg-primary px-4 py-1 rounded-md text-white"
            >
              Tambah Petugas
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
                  <th className="border shadow-md ">Id Petugas</th>
                  <th className="border shadow-md ">Nama Lengkap</th>
                  <th className="border shadow-md ">Username</th>
                  <th className="border shadow-md ">Status</th>
                  <th className="border shadow-md ">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((petugas, i) => (
                  <tr key={petugas.id}>
                    <td className="border shadow-md ">{i + 1}</td>
                    <td className="border shadow-md ">{petugas.id}</td>
                    <td className="border shadow-md ">{petugas.fnama}</td>
                    <td className="border shadow-md ">{petugas.username}</td>
                    <td className="border shadow-md ">{petugas.status}</td>
                    <td className="border shadow-md ">
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
                        onClick={() => handleDelete(petugas.id)}
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
                <button className=" px-4 py-1  bg-blue-600 text-white">
                  1
                </button>
                <button className=" px-4 py-1  bg-blue-600 text-white">
                  2
                </button>
                <button className=" px-4 py-1  ">Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DataPetugasPage;
