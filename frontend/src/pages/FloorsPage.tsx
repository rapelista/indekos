import { FloorCreate } from "@/components/@floor/FloorCreate";
import { FloorTable } from "@/components/@table/FloorTable";
import { H3 } from "@/components/ui/typography";

export const FloorsPage = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <H3 className="opacity-[0.9]">Lantai</H3>
                <FloorCreate />
            </div>
            <FloorTable />
        </>
    );
};
