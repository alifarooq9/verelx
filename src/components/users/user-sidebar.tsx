"use client";

import {
	ArrowUpRightFromCircleIcon,
	BarChart3Icon,
	CreditCardIcon,
	MaximizeIcon,
	MoonIcon,
	SettingsIcon,
	UserIcon,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn, isActive } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";

type UserSidebarProps = {
	session: Session | null;
};

const links = [
	{
		name: "Profile",
		href: "/profile",
		icon: UserIcon,
	},
	{
		name: "Dashboard",
		href: "/dashboard",
		icon: BarChart3Icon,
	},
	{
		name: "Billing",
		href: "/billing",
		icon: CreditCardIcon,
	},
	{
		name: "Plans",
		href: "/plans",
		icon: ArrowUpRightFromCircleIcon,
	},
	{
		name: "Settings",
		href: "/settings",
		icon: SettingsIcon,
	},
	{
		name: "Appearance",
		href: "/appearance",
		icon: MoonIcon,
	},
];

const UserSidebar = ({ session }: UserSidebarProps) => {
	const pathname = usePathname();

	return (
		<aside className="w-72 sticky top-0 z-50 left-0 border-r p-6 h-full">
			<Link
				href="/"
				className={cn(
					buttonVariants({
						size: "sm",
						variant: "ghost",
						className: cn("flex items-center w-fit"),
					})
				)}
			>
				<MaximizeIcon className="w-5 h-5 mr-2" strokeWidth={2} />
				<span className="font-bold text-xl">Verelx</span>
			</Link>

			<nav className="mt-8">
				<ul className="space-y-1">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={cn(
									buttonVariants({
										size: "lg",
										variant: "ghost",
										className: cn(
											"flex items-center py-6 justify-start w-full",
											isActive({
												pathname,
												href: link.href,
											})
												? "bg-muted"
												: ""
										),
									})
								)}
							>
								<link.icon
									className="w-5 h-5 mr-2"
									strokeWidth={2}
								/>
								<span>{link.name}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default UserSidebar;
