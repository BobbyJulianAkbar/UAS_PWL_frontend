import clsx from "clsx";
import userLine from "../../assets/icons/user-line.png";

interface DashboardMenuCardProps {
  title?: string;
  total?: number;
  className?: string;
  icon?: string;
}

const DashboardMenuCard = ({
  title = "Total Anggota",
  total = 0,
  className = "bg-primary",
  icon = userLine,
}: DashboardMenuCardProps) => {
  return (
    <>
      <div className="mt-8 flex items-center p-2 shadow-lg border min-w-[300px]">
        <div className={clsx("p-4 rounded-md", className)}>
          <img src={icon} alt="user" />
        </div>
        <div className="ml-4">
          <h1 className="">{title}</h1>
          <p className="font-bold">{total}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardMenuCard;
