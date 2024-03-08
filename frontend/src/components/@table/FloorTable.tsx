import { DataTable } from "@/components/ui/data-table";
import { useGetFloors } from "@/hooks/api/floors/useGetRooms";
import { useFloorTable } from "@/hooks/api/table/useFloorTable";

export const FloorTable = () => {
    const { columns } = useFloorTable();
    const { data } = useGetFloors();

    return data && <DataTable columns={columns} data={data} />;
};
