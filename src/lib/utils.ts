import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type ActiveLinkProps = {
    href: string;
    pathname: string;
};

export const isActive = ({ pathname, href }: ActiveLinkProps) => {
    if (pathname === href) {
        return true;
    } else {
        return false;
    }
};

export const absoluteURL = (path: string) => {
    return `${process.env.NEXTAUTH_URL || "http://localhost:3000"}${path}`;
};
