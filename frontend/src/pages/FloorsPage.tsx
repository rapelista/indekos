import { FloorTable } from "@/components/@table/FloorTable";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { useGetFloors } from "@/hooks/api/floors/useGetRooms";
import { PlusIcon } from "lucide-react";

export const FloorsPage = () => {
    const { data } = useGetFloors();

    return (
        <>
            <div className="flex justify-between items-center">
                <H3 className="opacity-[0.9]">Lantai</H3>
                <Button>
                    <PlusIcon className="me-3" /> Tambah
                </Button>
            </div>

            {data && <FloorTable data={data} />}
        </>
    );
};
