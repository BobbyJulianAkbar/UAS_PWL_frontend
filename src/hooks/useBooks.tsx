import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { ICategory } from "./useCategories";

export interface IBook {
  id: number;
  judul: string;
  pengarang: string;
  penerbit: string;
  tahun_terbit: string;
  isbn: string;
  jumlah_buku: number;
  deskripsi: string;
  kategori_id: number;
  kategori: ICategory;
  jumlah_peminjaman: number;
}

export const useBooks = () => {
  const fetcher = async (url: string) => {
    const res = await axiosInstance.get(url);
    const data = await res.data;

    return data;
  };

  const {
    data,
    error,
    isLoading,
  }: {
    data: IBook[];
    error: unknown;
    isLoading: boolean;
  } = useSWR("api/v1/buku", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
