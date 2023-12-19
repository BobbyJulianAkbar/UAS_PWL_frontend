import { Link, useParams } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import BukuCard from "../../components/cards/BukuCard";
import { useBook } from "../../hooks/useBook";

const DetailBukuPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useBook(Number(id));

  return (
    <>
      <HeaderDashboard title="Meminjam Buku di Perpustakaan Dengan Kemudahan" />

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="mt-12 flex gap-4 items-start">
          <div className="border max-w-fit p-4 shadow-lg">
            <BukuCard id={Number(id)} showDetail={true} data={data} />
          </div>
          <div>
            <h1 className="font-bold text-[32px]">{data.judul}</h1>
            <table className="w-[800px] mt-8">
              <tbody className="">
                <tr className="">
                  <td className="border-2 px-4 bg-gray-300">Pengarang</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.pengarang}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">Tahun Terbit</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.tahun_terbit}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">Penerbit</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.penerbit}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">ISBN</td>
                  <td className="border-2 px-4 min-w-[400px]">{data?.isbn}</td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">Kategori</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.kategori.nama}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">Jumlah Buku</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.jumlah_buku}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 bg-gray-300">Deskripsi</td>
                  <td className="border-2 px-4 min-w-[400px]">
                    {data?.deskripsi}
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to={`/dashboard-anggota/pinjam/${id}`}>
              <div className="text-center bg-primary text-white py-2 rounded-[8px] font-semibold mt-16 self-start px-8 shadow-md min-w-[800px]">
                Pinjam Buku
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailBukuPage;
