import ApiService from "@/components/services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data) => await ApiService.post("/auth/login", data),
    });
};
