import { FloorCreateDialog } from "@/components/@floor/FloorCreateDialog";
import { FloorCreateForm } from "@/components/@floor/FloorCreateForm";
import { Button } from "@/components/ui/button";
import { useBoolean } from "@/hooks/useBoolean";
import { PlusIcon } from "lucide-react";

export const FloorCreate = () => {
    const { value, setValue, setTrue, setFalse } = useBoolean();

    return (
        <>
            <Button onClick={setTrue}>
                <PlusIcon className="me-3" /> Tambah
            </Button>
            <FloorCreateDialog value={value} setValue={setValue}>
                <FloorCreateForm close={setFalse} />
            </FloorCreateDialog>
        </>
    );
};
