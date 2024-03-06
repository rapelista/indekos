import { NavbarDrawerMenu } from "@/components/NavbarDrawerMenu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Logo } from "@/components/ui/logo";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const NavbarDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closeDrawer = () => setIsOpen(false);

    return (
        <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>
            <DrawerContent
                className="bg-white flex flex-col rounded-none w-3/4 md:w-1/2 h-full w- mt-24 fixed bottom-0 left-0"
                noSnap
            >
                <div className="flex justify-center items-center gap-x-2 py-8">
                    <Logo />
                </div>
                <NavbarDrawerMenu close={closeDrawer} />
            </DrawerContent>
        </Drawer>
    );
};
