import ApiService from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

interface IMeResponse {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

export const useMe = () => {
    const queryKey = ["/auth/me"];
    const queryFn = async () => await ApiService.get<IMeResponse>("/auth/me");

    return useQuery({ queryKey, queryFn });
};
