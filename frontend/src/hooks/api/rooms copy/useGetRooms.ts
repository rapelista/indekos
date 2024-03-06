import { Room } from "@/lib/types";
import ApiService from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetRooms = () => {
    const queryKey = ["rooms"];
    const queryFn = async () => await ApiService.get<Room[]>("rooms");

    return useQuery({ queryKey, queryFn });
};
