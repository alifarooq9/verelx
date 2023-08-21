"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const DrawerRoot = DrawerPrimitive.Root;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerOverlay = DrawerPrimitive.Overlay;

const DrawerContent = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Portal className="w-screen">
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                ((className =
                    "bg-background z-[200] transform-gpu top-0 w-screen border border-muted p-3 flex flex-col rounded-t-lg mt-16 fixed bottom-0 left-0 right-0"),
                className),
            )}
            {...props}
        >
            {props.children}
        </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
));

DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted-foreground mb-8",
            className,
        )}
        {...props}
    />
));

DrawerIcon.displayName = "DrawerIcon";

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight",
            className,
        )}
        {...props}
    />
));

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
    DrawerRoot,
    DrawerPortal,
    DrawerTrigger,
    DrawerOverlay,
    DrawerContent,
    DrawerIcon,
    DrawerTitle,
    DrawerDescription,
};
