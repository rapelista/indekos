import { Floor } from "@/lib/types";
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

export const useFloorTable = () => {
    const columns: ColumnDef<Floor>[] = [
        {
            accessorKey: "name",
            id: "Name",
            header: ({ column }) => <DataTableColumnHeader column={column} />,
        },
        {
            accessorKey: "rooms",
            id: "Total Kamar",
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
    };
};
