import ApiService from "@/components/services/ApiService";
import { useMutation } from "@tanstack/react-query";

type LoginBodyType = {
    email: string;
    password: string;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data: LoginBodyType) =>
            await ApiService.post("/auth/login", data),
    });
};
