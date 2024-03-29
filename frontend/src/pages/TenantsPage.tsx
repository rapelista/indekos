import { UserTable } from "@/components/@table/UserTable";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { useGetUsers } from "@/hooks/api/users/useGetUsers";
import { PlusIcon } from "lucide-react";

export const TenantsPage = () => {
    const { data: users } = useGetUsers();

    return (
        <>
            <div className="flex justify-between items-center">
                <H3 className="opacity-[0.9]">Penghuni</H3>
                <Button>
                    <PlusIcon className="me-3" /> Tambah
                </Button>
            </div>
            {users && <UserTable data={users} />}
        </>
    );
};
