import useSWR from "swr";
import { axiosInstance } from "../utils/axios";

export interface IAnggota {
  id: number;
  nama: string;
  email: string;
  nis: string;
}

export const useAnggotas = () => {
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
    data: IAnggota[];
    error: unknown;
    isLoading: boolean;
  } = useSWR("api/v1/anggota", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
