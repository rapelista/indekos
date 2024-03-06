import { Card, CardContent } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import { useGetUsers } from "@/hooks/api/users/useGetUsers";

export const TenantsPage = () => {
    const { data: users } = useGetUsers();

    return (
        <>
            <H3 className="opacity-[0.9]">Penghuni</H3>
            <Card className="mt-4">
                <CardContent className="pt-4">
                    {users &&
                        users.map(({ name, id }) => (
                            <div key={`user-${id}`}>{name}</div>
                        ))}
                </CardContent>
            </Card>
        </>
    );
};
