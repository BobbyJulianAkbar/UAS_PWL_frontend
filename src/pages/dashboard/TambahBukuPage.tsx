import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../components/cards/HeaderDashboard";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { useCategories } from "../../hooks/useCategories";

interface IFormInput {
  judul: string;
  pengarang: string;
  penerbit: string;
  tahun_terbit: string;
  kategori_id: number;
  isbn: string;
  jumlah_buku: number;
  deskripsi: string;
}

const TambahBukuPage = () => {
  const navigate = useNavigate();

  const { data: kategori } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    // console.log(data);
    // return;
    try {
      toast.promise(
        axiosInstance.post("api/v1/buku", {
          ...data,
          kategori_id: Number(data.kategori_id),
          jumlah_buku: Number(data.jumlah_buku),
        }),
        {
          pending: "Loading...",
          success: {
            render() {
              navigate("/dashboard/buku");
              return `Tambah Buku success`;
            },
          },
          error: "Tambah Buku failed",
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
          <label htmlFor="judul" className="font-bold">
            Judul
          </label>
          <input
            type="text"
            id="judul"
            placeholder="Masukkan Judul Buku"
            className="border w-full px-2"
            {...register("judul", { required: true })}
          />
          {errors.judul && (
            <span className="text-red-500">Judul tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>

          <label htmlFor="pengarang" className="font-bold">
            Pengarang
          </label>
          <input
            type="text"
            id="pengarang"
            placeholder="Pengarang"
            className="border w-full px-2"
            {...register("pengarang", { required: true })}
          />
          {errors.pengarang && (
            <span className="text-red-500">Pengarang tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="penerbit" className="font-bold">
            Penerbit
          </label>
          <input
            type="text"
            id="penerbit"
            placeholder="Penerbit"
            className="border w-full px-2"
            {...register("penerbit", { required: true })}
          />
          {errors.penerbit && (
            <span className="text-red-500">Penerbit tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="tahun" className="font-bold">
            Tahun Terbit
          </label>
          <input
            type="text"
            id="tahun"
            placeholder="Tahun Terbit"
            className="border w-full px-2"
            {...register("tahun_terbit", { required: true })}
          />
          {errors.tahun_terbit && (
            <span className="text-red-500">
              Tahun Terbit tidak boleh kosong
            </span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="kategori" className="font-bold">
            Kategori
          </label>
          <select
            id="kategori"
            className="border w-full px-2"
            {...register("kategori_id", { required: true })}
          >
            {kategori?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.nama}
              </option>
            ))}
            {/* <option value="1">Pendidikan</option>
            <option value="2">Novel</option>
            <option value="3">Komik</option> */}
          </select>
          <div className="h-[20px]"></div>
          <label htmlFor="isbn" className="font-bold">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            placeholder="Masukkan ISBN"
            className="border w-full px-2"
            {...register("isbn", { required: true })}
          />
          {errors.isbn && (
            <span className="text-red-500">ISBN tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="jumlah" className="font-bold">
            Jumlah Buku
          </label>
          <input
            type="number"
            id="jumlah"
            placeholder="Jumlah Buku"
            className="border w-full px-2"
            {...register("jumlah_buku", { required: true })}
          />
          {errors.jumlah_buku && (
            <span className="text-red-500">Jumlah Buku tidak boleh kosong</span>
          )}
          <div className="h-[20px]"></div>
          <label htmlFor="deskripsi" className="font-bold">
            Deskripsi
          </label>
          <input
            type="text"
            id="deskripsi"
            placeholder="Deskripsi Buku"
            className="border w-full px-2"
            {...register("deskripsi", { required: true })}
          />
          {errors.deskripsi && (
            <span className="text-red-500">Deskripsi tidak boleh kosong</span>
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

export default TambahBukuPage;
