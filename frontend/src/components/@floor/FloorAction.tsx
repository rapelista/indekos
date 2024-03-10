import { FloorDelete } from "@/components/@floor/FloorDelete";
import { useTableAction } from "@/hooks/table/useTableAction";
import { useEffect } from "react";

export const FloorAction = ({
    action,
    isActionDelete,
    clearAction,
}: Partial<ReturnType<typeof useTableAction>>) => {
    useEffect(() => {
        if (isActionDelete) {
            console.log("Delete");
        }

        console.log(action, isActionDelete);
    }, [action, isActionDelete]);

    return (
        <>
            <FloorDelete {...{ action, isActionDelete, clearAction }} />
        </>
    );
};
