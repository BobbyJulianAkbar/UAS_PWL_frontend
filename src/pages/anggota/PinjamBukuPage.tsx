import { useNavigate, useParams } from "react-router-dom";
import BukuCard from "../../components/cards/BukuCard";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useBook } from "../../hooks/useBook";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { useAuthUser } from "react-auth-kit";

interface IFormInput {
  tanggal_peminjaman: string;
  tanggal_pengembalian: string;
}

const PinjamBukuPage = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data, isLoading, error } = useBook(Number(id));

  const auth = useAuthUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    // console.log(data);
    try {
      toast.promise(
        axiosInstance.post("api/v1/peminjaman", {
          ...data,
          id_buku: Number(id),
          id_anggota: auth()?.id,
        }),
        {
          pending: "Loading...",
          success: {
            render(res) {
              navigate(
                `/dashboard-anggota/selesai-pinjam/${res.data?.data.id}`
              );
              return `Pinjam Buku success`;
            },
          },
          error: "Pinjam Buku failed",
        },
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderDashboard title="Meminjam Buku di Perpustakaan Dengan Kemudahan" />

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <form className="w-full mt-16 mb-32" onSubmit={handleSubmit(onSubmit)}>
          <div className="border max-w-fit p-4 shadow-lg mx-auto">
            <BukuCard id={Number(id)} showDetail={true} data={data} />
          </div>
          <h1 className="font-bold text-[32px] text-center mt-4">
            {data?.judul}
          </h1>
          <div className="flex mt-4 gap-4 px-16">
            <div className="flex-1 flex flex-col">
              <label htmlFor="">Pilih tanggal pinjaman </label>
              <input
                type="date"
                className=" border p-2 shadow-md mt-2"
                placeholder="Pilih Tanggal Peminjaman"
                {...register("tanggal_peminjaman", { required: true })}
              />
              {errors.tanggal_peminjaman && (
                <span className="text-red-500">
                  Tanggal peminjaman tidak boleh kosong
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="">Pilih tanggal pengembalian </label>
              <input
                type="date"
                className=" border p-2 shadow-md mt-2"
                placeholder="Pilih Tanggal Peminjaman"
                {...register("tanggal_pengembalian", { required: true })}
              />
              {errors.tanggal_pengembalian && (
                <span className="text-red-500">
                  Tanggal pengembalian tidak boleh kosong
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 max-w-xl mx-auto gap-4">
            <button className="bg-primary text-white p-2 rounded-md shadow-md font-bold">
              Pinjam Buku
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md shadow-md font-bold"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Batal
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default PinjamBukuPage;
