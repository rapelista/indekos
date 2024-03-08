import ApiService from "@/services/ApiService";
import { useMutation } from "@tanstack/react-query";

interface IFloorCreateBody {
    name: string;
}

export const useCreateFloor = () => {
    const mutationFn = async (data: IFloorCreateBody) => {
        return await ApiService.post("/floors", data);
    };

    return useMutation({ mutationFn });
};
