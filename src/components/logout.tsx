"use client";

import { Slot } from "@radix-ui/react-slot";
import { signOut } from "next-auth/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { create } from "zustand";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface LogoutTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

interface LogoutModelState {
    openModel: boolean;
    setOpenModel: (open: boolean) => void;
}

const useLogoutModelStore = create<LogoutModelState>()((set) => ({
    openModel: false,
    setOpenModel: (open) => set({ openModel: open }),
}));

const LogoutTrigger = ({ children, asChild, ...props }: LogoutTriggerProps) => {
    const Comp = asChild ? Slot : "button";

    const { setOpenModel } = useLogoutModelStore();

    return (
        <Comp onClick={() => setOpenModel(true)} type="button" {...props}>
            {children}
        </Comp>
    );
};

const LogoutModel = () => {
    const { openModel, setOpenModel } = useLogoutModelStore();

    const [loading, setLoading] = useState<boolean>(false);

    const handleLogout = async () => {
        setLoading(true);

        try {
            await signOut({
                callbackUrl: "/auth",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={openModel}
            onOpenChange={(open) => {
                setOpenModel(open);
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Comeback Soon</DialogTitle>
                    <DialogDescription>
                        Do you really wish to log out? You can always log back
                        in later.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        disabled={loading}
                        onClick={handleLogout}
                        variant="destructive"
                        type="button"
                    >
                        {loading && <Loader2Icon className="w-4 h-4 mr-2" />}
                        Log out
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export { LogoutTrigger, LogoutModel };
