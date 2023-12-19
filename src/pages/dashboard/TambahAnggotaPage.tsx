import { useForm } from "react-hook-form";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";

interface IFormInput {
  nama: string;
  email: string;
  nis: string;
  password: string;
  konfirmasipassword: string;
}

const TambahAnggotaPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    try {
      if (data.password !== data.konfirmasipassword) {
        toast.error("Password tidak sama", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
        return;
      }
      toast.promise(
        axiosInstance.post("api/v1/anggota", data),
        {
          pending: "Loading...",
          success: {
            render() {
              navigate("/dashboard/anggota");
              return `Tambah Anggota success`;
            },
          },
          error: "Tambah Anggota failed",
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
      <HeaderDashboard title="Daftar Anggota Poestaka Rakjat" />
      <div className="shadow-lg mt-4 border p-4">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nama" className="font-bold">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            placeholder="Masukkan Nama Lengkap"
            className="border w-full px-2"
            {...register("nama", { required: true })}
          />
          {errors.nama && (
            <span className="text-red-500 mt-2 text-sm">
              Bidang ini harus diisi
            </span>
          )}
          <div className="h-[20px]"></div>

          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan Email"
            className="border w-full px-2"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 mt-2 text-sm">
              Bidang ini harus diisi
            </span>
          )}
          <div className="h-[20px]"></div>

          <label htmlFor="nis" className="font-bold">
            NIS
          </label>
          <input
            type="text"
            id="nis"
            placeholder="Masukkan Email"
            className="border w-full px-2"
            {...register("nis", { required: true })}
          />
          {errors.nis && (
            <span className="text-red-500 mt-2 text-sm">
              Bidang ini harus diisi
            </span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan Password"
            className="border w-full px-2"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 mt-2 text-sm">
              Bidang ini harus diisi
            </span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="konfirmasipassword" className="font-bold">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="konfirmasipassword"
            placeholder="Konfirmasi Password"
            className="border w-full px-2"
            {...register("konfirmasipassword", { required: true })}
          />
          {errors.konfirmasipassword && (
            <span className="text-red-500 mt-2 text-sm">
              Bidang ini harus diisi
            </span>
          )}
          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-4 py-1">
              <span>Simpan</span>
            </button>

            <button
              className="bg-secondary px-4 py-1"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <span>Batal</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahAnggotaPage;
