import { Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
    DoorClosed,
    UsersRound,
    type LucideIcon,
    BedIcon,
    Settings,
    LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface Menu {
    text: string;
    link: string | null;
    icon?: LucideIcon;
}

interface INavbarDrawerMenu {
    close: () => void;
}

export const NavbarDrawerMenu = ({ close }: INavbarDrawerMenu) => {
    const menus: Menu[] = [
        {
            text: "MENU",
            link: null,
        },
        {
            text: "Dashboard",
            link: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            text: "Penghuni",
            link: "/tenants",
            icon: UsersRound,
        },
        {
            text: "Kamar",
            link: "/rooms",
            icon: DoorClosed,
        },
        {
            text: "Lantai",
            link: "/floors",
            icon: DoorClosed,
        },
        {
            text: "Furnitur",
            link: "/furnitures",
            icon: BedIcon,
        },
        {
            text: "OTHER",
            link: null,
        },
        {
            text: "Pengaturan",
            link: "/settings",
            icon: Settings,
        },
    ];

    return (
        <ul className="flex flex-col gap-y-2">
            {menus.map(({ text, link, icon: Icon }, key) => {
                return (
                    <li
                        key={`menu-${key}`}
                        className="w-full [&>*]:w-full [&>*]:block [&>*]:py-3 [&>*]:px-4"
                    >
                        {link === null ? (
                            <Small className="text-gray-500 font-bold">
                                {text}
                            </Small>
                        ) : (
                            <NavLink
                                to={link}
                                className={({ isActive }) =>
                                    cn(
                                        "hover:border-l-gray-800 hover:bg-slate-200/50 border-l-4 border-transparent transition-colors duration-300",
                                        isActive
                                            ? "font-medium border-l-gray-800 bg-slate-200/50"
                                            : "font-normal"
                                    )
                                }
                                onClick={close}
                            >
                                <div className="flex items-center gap-2">
                                    {Icon && <Icon className="w-4 h-4" />}
                                    {text}
                                </div>
                            </NavLink>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
