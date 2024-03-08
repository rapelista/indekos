import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface IRoomCreateDialog {
    children: React.ReactNode;
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RoomCreateDialog = ({
    children,
    value,
    setValue,
}: IRoomCreateDialog) => {
    return (
        <Dialog open={value} onOpenChange={setValue}>
            <DialogContent>
                <DialogHeader className="text-left">
                    <DialogTitle>Tambah Kamar</DialogTitle>
                    <DialogDescription>
                        Anda dapat menambahkan kamar di sini
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
