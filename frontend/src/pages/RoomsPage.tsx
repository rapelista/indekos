import { RoomCreate } from "@/components/@room/RoomCreate";
import { RoomTable } from "@/components/@table/RoomTable";
import { H3 } from "@/components/ui/typography";

export const RoomsPage = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <H3 className="opacity-[0.9]">Kamar</H3>
                <RoomCreate />
            </div>
            <RoomTable />
        </>
    );
};
