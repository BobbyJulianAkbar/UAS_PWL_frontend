import HeaderDashboard from "../../components/cards/HeaderDashboard";
import eyeIcon from "../../assets/icons/eye.png";
import penIcon from "../../assets/icons/pen.png";
import trashIcon from "../../assets/icons/bin.png";
import { usePeminjaman } from "../../hooks/usePeminjaman";
import LoadingCard from "../../components/cards/LoadingCard";
import ErrorCard from "../../components/cards/ErrorCard";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { mutate } from "swr";

const DataPinjamanPage = () => {
  const { data, error, isLoading } = usePeminjaman();

  const handleDelete = (id: number) => {
    toast.promise(
      axiosInstance.delete(`api/v1/peminjaman?id=${id}`),
      {
        pending: "Loading...",
        success: {
          render() {
            mutate("api/v1/peminjaman");
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
        <div className="mt-4 flex justify-between">
          <div>
            <label htmlFor="offset">
              <span className="">Show </span>
            </label>
            <select name="offset" id="offset" className="pr-8 border shadow-md">
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
              <th className="border shadow-md ">Nama Peminjam</th>
              <th className="border shadow-md ">Email</th>
              <th className="border shadow-md ">Judul Buku</th>
              <th className="border shadow-md ">Tanggal Pinjam</th>
              <th className="border shadow-md ">Tanggal Kembali</th>
              <th className="border shadow-md ">Kategori</th>
              <th className="border shadow-md ">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {isLoading ? (
              <LoadingCard />
            ) : error ? (
              <ErrorCard />
            ) : (
              data?.map((item, index) => (
                <tr key={index}>
                  <td className="border shadow-md ">{index + 1}</td>
                  <td className="border shadow-md ">{item.anggota.nama}</td>
                  <td className="border shadow-md ">{item.anggota.email}</td>
                  <td className="border shadow-md ">{item.buku.judul}</td>
                  <td className="border shadow-md ">
                    {item.tanggal_peminjaman}
                  </td>
                  <td className="border shadow-md ">
                    {item.tanggal_pengembalian}
                  </td>
                  <td className="border shadow-md ">
                    {item.buku.kategori.nama}
                  </td>
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
                    <button className="" onClick={() => handleDelete(item.id)}>
                      <img src={trashIcon} alt="delete" className="w-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex  items-center mt-4">
          <p className="text-center ">
            Showing {data?.length} to {data?.length} of {data?.length} entries
          </p>
          <div className="ml-auto border">
            <button className=" px-4 py-1  ">Prev</button>
            <button className=" px-4 py-1  bg-blue-600 text-white">1</button>
            <button className=" px-4 py-1  bg-blue-600 text-white">2</button>
            <button className=" px-4 py-1  ">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPinjamanPage;
