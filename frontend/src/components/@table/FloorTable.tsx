import { DataTable } from "@/components/ui/data-table";
import { useFloorTable } from "@/hooks/api/table/useFloorTable";
import { Floor } from "@/lib/types";

interface IFloorTable {
    data: Floor[];
}

export const FloorTable = ({ data }: IFloorTable) => {
    const { columns } = useFloorTable();

    return <DataTable columns={columns} data={data} />;
};
