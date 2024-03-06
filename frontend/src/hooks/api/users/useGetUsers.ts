import { User } from "@/lib/types";
import ApiService from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
    const queryKey = ["users"];
    const queryFn = async () => await ApiService.get<User[]>("users");

    return useQuery({ queryKey, queryFn });
};
