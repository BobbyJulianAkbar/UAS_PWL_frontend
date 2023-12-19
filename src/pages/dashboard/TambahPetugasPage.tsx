import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";

interface IFormInput {
  fnama: string;
  username: string;
  email: string;
  password: string;
}

const TambahPetugasPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    try {
      toast.promise(
        axiosInstance.post("api/v1/petugas", data),
        {
          pending: "Loading...",
          success: {
            render() {
              navigate("/dashboard/petugas");
              return `Tambah Petugas success`;
            },
          },
          error: "Tambah Petugas failed",
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
      <HeaderDashboard title="Pendaftaran Petugas" />
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
            {...register("fnama", { required: true })}
          />
          {errors.fnama && (
            <span className="text-red-500">Nama tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>

          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan Username"
            className="border w-full px-2"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500">Username tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>

          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Masukkan Email"
            className="border w-full px-2"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Username tidak boleh kosong</span>
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
            <span className="text-red-500">Password tidak boleh kosong</span>
          )}
          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-4 py-1">
              <span>Simpan</span>
            </button>

            <button className="bg-secondary px-4 py-1">
              <span>Batal</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahPetugasPage;
