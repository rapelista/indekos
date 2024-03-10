import { Action, IAction } from "@/lib/types";
import { useState } from "react";

export const useTableAction = (initialActions?: Action[]) => {
    const [actions, setActions] = useState<Action[] | undefined>(
        initialActions
    );

    const [action, setAction] = useState<IAction | undefined>();

    const clearAction = () => {
        setAction(undefined);
    };

    const setActionDelete = <T>(data?: T) => {
        setAction({
            type: Action.DELETE,
            data,
        });
    };

    const setActionUpdate = <T>(data?: T) => {
        setAction({
            type: Action.UPDATE,
            data,
        });
    };

    const isActionDelete = action?.type === Action.DELETE;
    const isActionUpdate = action?.type === Action.UPDATE;

    return {
        action,
        actions,
        isActionDelete,
        isActionUpdate,

        setAction,
        setActions,
        setActionDelete,
        setActionUpdate,

        clearAction,
    };
};
