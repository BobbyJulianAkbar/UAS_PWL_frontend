import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { IBook } from "./useBook";
import { IAnggota } from "./useAnggotas";

interface IPeminjaman {
  id: number;
  id_buku: number;
  id_anggota: number;
  tanggal_peminjaman: string;
  tanggal_pengembalian: string;
  status: string;
  buku: IBook;
  anggota: IAnggota;
}

export const usePinjam = (id: number) => {
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
    data: IPeminjaman;
    error: unknown;
    isLoading: boolean;
  } = useSWR(`api/v1/peminjaman?id=${id}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
