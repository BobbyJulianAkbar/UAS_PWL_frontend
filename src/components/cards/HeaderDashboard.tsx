interface HeaderDashboardProps {
  title?: string;
}

const HeaderDashboard = ({ title = "Dashboard" }: HeaderDashboardProps) => {
  return (
    <div className="mt-4 bg-white py-8 px-4 shadow-lg">
      <h1 className=" font-bold text-3xl">{title}</h1>
    </div>
  );
};

export default HeaderDashboard;
