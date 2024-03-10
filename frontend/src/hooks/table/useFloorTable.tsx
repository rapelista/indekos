import { Action, Floor } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { useTableAction } from "@/hooks/table/useTableAction";

interface IuseFloorTable {
    actions?: Action[] | undefined;
}

export const useFloorTable = ({ actions: initialActions }: IuseFloorTable) => {
    const actions = useTableAction(initialActions);

    const columns: ColumnDef<Floor>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => <DataTableColumnHeader column={column} />,
        },
        {
            accessorKey: "rooms",
            id: "total_kamar",
            header: ({ column }) => <DataTableColumnHeader column={column} />,
            cell: ({ row }) => {
                const floor = row.original;
                return <>{`${floor.rooms.length} Kamar`}</>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const floor = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-8 h-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(`${floor.id}`)
                                }
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            {actions.actions?.includes(Action.UPDATE) && (
                                <DropdownMenuItem
                                    onClick={() => {
                                        actions.setActionUpdate<Floor>(floor);
                                    }}
                                >
                                    Update
                                </DropdownMenuItem>
                            )}
                            {actions.actions?.includes(Action.DELETE) && (
                                <DropdownMenuItem
                                    onClick={() => {
                                        actions.setActionDelete<Floor>(floor);
                                    }}
                                >
                                    Delete
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                View payment details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return {
        columns,
        actions,
    };
};
