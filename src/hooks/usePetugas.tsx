import useSWR from "swr";
import { axiosInstance } from "../utils/axios";

interface IPetugas {
  id: number;
  fnama: string;
  status: string;
  username: string;
}

export const usePetugas = () => {
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
    data: IPetugas[];
    error: unknown;
    isLoading: boolean;
  } = useSWR("api/v1/petugas", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
