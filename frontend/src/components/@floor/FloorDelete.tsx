import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useTableAction } from "@/hooks/table/useTableAction";
import { SyntheticEvent } from "react";

export const FloorDelete = ({
    action,
    isActionDelete: open,
    clearAction,
}: Partial<ReturnType<typeof useTableAction>>) => {
    const handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(action?.data);
    };

    return (
        <AlertDialog open={open} onOpenChange={clearAction}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Apa anda yakin untuk menghapus {action?.data?.name}?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Jika anda menghapusnya, data akan hilang dan tidak dapat
                        kembali lagi.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
