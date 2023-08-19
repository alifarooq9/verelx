import { type ClassValue, clsx } from "clsx"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ActiveLinkProps = {
    href: string;
    pathname: string;
}

export const isActive = ({pathname, href}: ActiveLinkProps) => {	
    if (pathname === href) {
		return true;
	} else {
		return false;
	}
}