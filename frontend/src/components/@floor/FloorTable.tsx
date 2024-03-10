import { FloorAction } from "@/components/@floor/FloorAction";
import { DataTable } from "@/components/ui/data-table";
import { useGetFloors } from "@/hooks/api/floors/useGetRooms";
import { useFloorTable } from "@/hooks/table/useFloorTable";
import { Action } from "@/lib/types";

export const FloorTable = () => {
    const { data } = useGetFloors();
    const { actions, columns } = useFloorTable({
        actions: [Action.UPDATE, Action.DELETE],
    });

    return (
        data && (
            <>
                <DataTable columns={columns} data={data} />
                <FloorAction {...actions} />
            </>
        )
    );
};
