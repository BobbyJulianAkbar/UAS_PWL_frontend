import { Link } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import eyeIcon from "../../assets/icons/eye.png";
import penIcon from "../../assets/icons/pen.png";
import trashIcon from "../../assets/icons/bin.png";
import { useBooks } from "../../hooks/useBooks";
import LoadingCard from "../../components/cards/LoadingCard";
import ErrorCard from "../../components/cards/ErrorCard";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { mutate } from "swr";

const DataBukuPage = () => {
  const { data, isLoading, error } = useBooks();

  const handleDelete = (id: number) => {
    toast.promise(
      axiosInstance.delete(`api/v1/buku?id=${id}`),
      {
        pending: "Loading...",
        success: {
          render() {
            mutate("api/v1/buku");
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
      {isLoading ? (
        <LoadingCard />
      ) : error ? (
        <ErrorCard />
      ) : (
        <div className="shadow-lg mt-4 border p-4">
          <Link
            to={"/dashboard/buku/tambah"}
            className="bg-primary px-4 py-1 rounded-md text-white"
          >
            Tambah Buku
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
                <th className="border shadow-md ">Judul Buku</th>
                <th className="border shadow-md ">Deskripsi Buku</th>
                <th className="border shadow-md ">Jumlah Buku</th>
                <th className="border shadow-md ">Jumlah Pinjaman</th>
                <th className="border shadow-md ">Kategori</th>
                <th className="border shadow-md ">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.map((book, i) => (
                <tr key={book.id}>
                  <td className="border shadow-md ">{i + 1}</td>
                  <td className="border shadow-md ">{book.judul}</td>
                  <td className="border shadow-md ">{book.deskripsi}</td>
                  <td className="border shadow-md ">{book.jumlah_buku}</td>
                  <td className="border shadow-md ">
                    {book.jumlah_peminjaman}
                  </td>
                  <td className="border shadow-md ">{book.kategori.nama}</td>
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
                    <button className="" onClick={() => handleDelete(book.id)}>
                      <img src={trashIcon} alt="delete" className="w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex  items-center mt-4">
            <p className="text-center ">Showing 1 to 1 of 1 entries</p>
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

export default DataBukuPage;
