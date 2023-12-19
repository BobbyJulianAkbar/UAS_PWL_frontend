import { useParams } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import BukuCard from "../../components/cards/BukuCard";
import { usePinjam } from "../../hooks/usePinjam";

const SelesaiPinjamBukuPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = usePinjam(Number(id));

  return (
    <>
      <HeaderDashboard title="Meminjam Buku di Perpustakaan Dengan Kemudahan" />

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="w-full mt-16 mb-32">
          <div className="border max-w-fit p-4 shadow-lg mx-auto">
            <BukuCard id={Number(id)} showDetail={true} data={data.buku} />
          </div>
          <h1 className="font-bold text-[32px] text-center mt-4">
            {data.buku.judul}
          </h1>
          <table className="w-[600px] mt-8 mx-auto">
            <tbody className="">
              <tr className="">
                <td className="border-2 px-4 bg-gray-300">Nama Peminjam</td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data?.anggota.nama}
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 bg-gray-300">Email</td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data?.anggota.email}
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 bg-gray-300">Judul Buku</td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data?.buku.judul}
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 bg-gray-300">ISBN</td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data?.buku.isbn}
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 bg-gray-300">
                  Tanggal Peminjaman
                </td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data.tanggal_peminjaman}
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 bg-gray-300">
                  Tanggal Pengembalian
                </td>
                <td className="border-2 px-4 min-w-[200px]">
                  {data.tanggal_pengembalian}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SelesaiPinjamBukuPage;
