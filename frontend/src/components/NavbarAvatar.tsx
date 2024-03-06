import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { parseInitialName } from "@/lib/utils";

interface INavbarAvatar {
    name?: string;
}

export const NavbarAvatar = ({ name = "" }: INavbarAvatar) => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{parseInitialName(name)}</AvatarFallback>
        </Avatar>
    );
};
