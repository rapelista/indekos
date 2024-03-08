import ApiService from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

interface IRoomCreateBody {
    name: string;
}

export const useCreateRoom = () => {
    const mutationFn = async (data: IRoomCreateBody) => {
        return await ApiService.post("/rooms", data);
    };

    return useMutation({ mutationFn });
};
