import { DataTable } from "@/components/ui/data-table";
import { useUserTable } from "@/hooks/api/table/useUserTable";
import { User } from "@/lib/types";

interface IUserTable {
    data: User[];
}

export const UserTable = ({ data }: IUserTable) => {
    const { columns } = useUserTable();

    return <DataTable columns={columns} data={data} />;
};
