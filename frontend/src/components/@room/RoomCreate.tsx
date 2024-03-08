import { RoomCreateDialog } from "@/components/@room/RoomCreateDialog";
import { RoomCreateForm } from "@/components/@room/RoomCreateForm";
import { Button } from "@/components/ui/button";
import { useBoolean } from "@/hooks/useBoolean";
import { PlusIcon } from "lucide-react";

export const RoomCreate = () => {
    const { value, setValue, setTrue, setFalse } = useBoolean();

    return (
        <>
            <Button onClick={setTrue}>
                <PlusIcon className="me-3" /> Tambah
            </Button>
            <RoomCreateDialog value={value} setValue={setValue}>
                <RoomCreateForm close={setFalse} />
            </RoomCreateDialog>
        </>
    );
};
