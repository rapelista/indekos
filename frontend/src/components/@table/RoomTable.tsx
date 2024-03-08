import { DataTable } from "@/components/ui/data-table";
import { useGetRooms } from "@/hooks/api/rooms/useGetRooms";
import { useRoomTable } from "@/hooks/api/table/useRoomTable";

export const RoomTable = () => {
    const { columns } = useRoomTable();
    const { data } = useGetRooms();

    return data && <DataTable columns={columns} data={data} />;
};
