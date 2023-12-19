import BukuCard from "../../components/cards/BukuCard";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useBooks } from "../../hooks/useBooks";

export const DashboardAnggotaPage = () => {
  const { data, isLoading, error } = useBooks();

  return (
    <>
      <HeaderDashboard title="Meminjam Buku di Perpustakaan Dengan Kemudahan" />

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-8">
          {data?.map((item, index) => (
            <BukuCard key={index} id={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
};
