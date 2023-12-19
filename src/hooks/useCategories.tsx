import useSWR from "swr";
import { axiosInstance } from "../utils/axios";

export interface ICategory {
  id: number;
  nama: string;
}

export const useCategories = () => {
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
    data: ICategory[];
    error: unknown;
    isLoading: boolean;
  } = useSWR("api/v1/kategori", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
