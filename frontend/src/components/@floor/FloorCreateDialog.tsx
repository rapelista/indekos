import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface IFloorCreateDialog {
    children: React.ReactNode;
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FloorCreateDialog = ({
    children,
    value,
    setValue,
}: IFloorCreateDialog) => {
    return (
        <Dialog open={value} onOpenChange={setValue}>
            <DialogContent>
                <DialogHeader className="text-left">
                    <DialogTitle>Tambah Lantai</DialogTitle>
                    <DialogDescription>
                        Anda dapat menambahkan lantai di sini
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
