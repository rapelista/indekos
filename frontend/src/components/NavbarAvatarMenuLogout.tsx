import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface INavbarAvatarMenuLogout {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

export const NavbarAvatarMenuLogout = ({
    open,
    toggle,
}: INavbarAvatarMenuLogout) => {
    return (
        <AlertDialog open={open} onOpenChange={toggle}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Apakah anda yakin akan keluar?
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Link to={"/logout"}>Ya, keluar</Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
