import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { ShieldCheck, ShieldOff } from "lucide-react";
import { useNavigate } from "react-router";

type LoginDialogProps = {
    open: boolean;
    success: boolean;
    error: boolean;
    continue: () => void;
};

export const LoginDialog = ({
    open,
    success,
    error,
    continue: onContinue,
}: LoginDialogProps) => {
    const navigate = useNavigate();
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                {success && (
                    <>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Login berhasil!</AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="mx-auto w-fit p-8 rounded-full bg-blue-600 text-white">
                                    <ShieldCheck className="h-16 w-16" />
                                </div>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction
                                onClick={() => {
                                    navigate("/dashboard");
                                    onContinue();
                                }}
                            >
                                Dashboard
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </>
                )}
                {error && (
                    <>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Login gagal!</AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="mx-auto w-fit p-8 rounded-full bg-red-600 text-white">
                                    <ShieldOff className="h-16 w-16" />
                                </div>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={onContinue}>
                                Ulangi
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </>
                )}
            </AlertDialogContent>
        </AlertDialog>
    );
};
