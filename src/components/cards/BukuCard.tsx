import clsx from "clsx";
import { Link } from "react-router-dom";
import { IBook } from "../../hooks/useBooks";

interface BukuCardProps {
  id: number;
  showDetail?: boolean;
  data: IBook;
}

const BukuCard = ({ id, showDetail = false, data }: BukuCardProps) => {
  // generate random color using tailwindcss color palette
  const colors = [
    "bg-[#269BDD]",
    "bg-[#347193]",
    "bg-[#43D2B8]",
    "bg-[#183C35]",
    "bg-[#AD26DD]",
    "bg-[#4729BF]",
    "bg-[#D2436E]",
    "bg-[#C90427]",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="w-[180px]">
      <div
        className={clsx(
          "max-w-[180px] p-4 min-h-[240px] rounded-lg shadow-lg",
          randomColor
        )}
      >
        <h1 className="font-bold text-[20px] text-center text-white">
          {data.judul}
        </h1>
      </div>
      <div className="h-[12px]"></div>

      {
        // if showDetail is true, show the detail button
        !showDetail && (
          <Link
            to={`/dashboard-anggota/detail/${id}`}
            className="bg-primary px-4 rounded-full py-1 text-white font-bold"
          >
            Lihat Detail
          </Link>
        )
      }
    </div>
  );
};

export default BukuCard;
