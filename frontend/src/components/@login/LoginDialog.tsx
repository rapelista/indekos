import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { ShieldCheck, ShieldOff } from "lucide-react";
import { Link } from "react-router-dom";

type LoginDialogProps = {
    open: boolean;
    success: boolean;
    error: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginDialog = ({ error, success, ...props }: LoginDialogProps) => {
    return (
        <AlertDialog {...props}>
            <AlertDialogContent>
                {success && (
                    <>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Login berhasil!</AlertDialogTitle>
                        </AlertDialogHeader>
                        <div className="mx-auto w-fit p-8 rounded-full bg-blue-600 text-white">
                            <ShieldCheck className="h-16 w-16" />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogAction asChild>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </>
                )}
                {error && (
                    <>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Login gagal!</AlertDialogTitle>
                        </AlertDialogHeader>

                        <div className="mx-auto w-fit p-8 rounded-full bg-red-600 text-white">
                            <ShieldOff className="h-16 w-16" />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Ulangi</AlertDialogCancel>
                        </AlertDialogFooter>
                    </>
                )}
            </AlertDialogContent>
        </AlertDialog>
    );
};
