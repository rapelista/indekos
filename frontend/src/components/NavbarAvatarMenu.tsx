import { LogOut, Settings, User } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { NavbarAvatarMenuLogout } from "@/components/NavbarAvatarMenuLogout";
import { useState } from "react";

interface INavbarAvatarMenu {
    name?: string;
    children: React.ReactNode;
}

export const NavbarAvatarMenu = ({ name, children }: INavbarAvatarMenu) => {
    const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);

    const openLogout = () => setIsOpenLogout(true);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
                <DropdownMenuContent className="absolute right-0 w-52">
                    <DropdownMenuLabel className="truncate">
                        {name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link to={"/my-profile"}>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={"/my-profile/settings"}>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Pengaturan</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={openLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Keluar</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <NavbarAvatarMenuLogout
                open={isOpenLogout}
                toggle={setIsOpenLogout}
            />
        </>
    );
};
