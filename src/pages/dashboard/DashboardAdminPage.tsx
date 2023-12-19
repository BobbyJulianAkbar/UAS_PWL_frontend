import DashboardMenuCard from "../../components/cards/DashboardMenuCard";
import bookIcon from "../../assets/icons/book.png";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useAnggotas } from "../../hooks/useAnggotas";
import { usePetugas } from "../../hooks/usePetugas";
import { useBooks } from "../../hooks/useBooks";

const DashboardAdminPage = () => {
  const { data: anggota } = useAnggotas();
  const { data: petugas } = usePetugas();
  const { data: buku } = useBooks();

  const totalBuku = () => {
    let total = 0;

    buku?.forEach((buku) => {
      total += buku.jumlah_buku;
    });

    return total;
  };

  return (
    <>
      <HeaderDashboard />
      <div className="flex gap-4 flex-wrap ">
        <DashboardMenuCard
          title="Total Anggota"
          total={anggota ? anggota.length : 0}
          className="bg-[#3967DB]"
        />
        <DashboardMenuCard
          title="Total Petugas"
          total={petugas ? petugas.length : 0}
          className="bg-[#E1402A]"
        />
        <DashboardMenuCard
          title="Buku Dipinjam"
          total={buku ? buku.length : 0}
          className="bg-[#F99602]"
          icon={bookIcon}
        />
        <DashboardMenuCard
          title="Jumlah Buku"
          total={totalBuku()}
          className="bg-[#F99602]"
          icon={bookIcon}
        />
      </div>
    </>
  );
};

export default DashboardAdminPage;
