import { Floor } from "@/lib/types";
import ApiService from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetFloors = () => {
    const queryKey = ["floors"];
    const queryFn = async () => await ApiService.get<Floor[]>("floors");

    return useQuery({ queryKey, queryFn });
};
