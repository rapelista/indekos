import { NavbarAvatar } from "@/components/NavbarAvatar";
import { NavbarAvatarMenu } from "@/components/NavbarAvatarMenu";
import { NavbarDrawer } from "@/components/NavbarDrawer";
import { Skeleton } from "@/components/ui/skeleton";
import { useMe } from "@/hooks/api/auth/useMe";

export const Navbar = () => {
    const { data, isFetching } = useMe();

    return (
        <div className="w-screen border-b">
            <div className="container flex justify-between py-4">
                <NavbarDrawer />
                {isFetching ? (
                    <Skeleton className="w-10 h-10 rounded-full" />
                ) : (
                    <NavbarAvatarMenu name={data?.name}>
                        <NavbarAvatar name={data?.name} />
                    </NavbarAvatarMenu>
                )}
            </div>
        </div>
    );
};
