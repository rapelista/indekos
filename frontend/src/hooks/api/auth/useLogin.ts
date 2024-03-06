import ApiService from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

interface ILoginBody {
    email: string;
    password: string;
}

interface ILoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export const useLogin = () => {
    const mutationFn = async (data: ILoginBody) =>
        await ApiService.post<ILoginResponse>("/auth/login", data);

    return useMutation({ mutationFn });
};
