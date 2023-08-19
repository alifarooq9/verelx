import {
	ArrowUpRightFromCircle,
	BarChart3,
	CreditCard,
	LogOutIcon,
	Moon,
	Settings,
	User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Session } from "next-auth";
import Link from "next/link";
import { LogoutTrigger } from "./logout";

interface Props {
	session: Session | null;
}

const UserDropDown = ({ session }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="w-fit h-fit">
					<Avatar className="w-8 h-8">
						<AvatarImage
							src={session?.user.image as string}
							alt={session?.user.name as string}
						/>
						<AvatarFallback>
							{getInitials(session?.user.name as string)}
						</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>
					<h6 className="line-clamp-1">{session?.user.name}</h6>
					<p className="text-muted-foreground font-light line-clamp-1">
						{session?.user.email}
					</p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href="/profile" className="cursor-pointer">
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/dashboard" className="cursor-pointer">
							<BarChart3 className="mr-2 h-4 w-4" />
							<span>Dashboard</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/billing" className="cursor-pointer">
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/plans" className="cursor-pointer">
							<ArrowUpRightFromCircle className="mr-2 h-4 w-4" />
							<span>Plans</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href="/settings" className="cursor-pointer">
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/appearance" className="cursor-pointer">
							<Moon className="mr-2 h-4 w-4" />
							<span>Appearance</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				{/* <DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Users className="mr-2 h-4 w-4" />
						<span>Team</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<UserPlus className="mr-2 h-4 w-4" />
							<span>Invite users</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<Mail className="mr-2 h-4 w-4" />
									<span>Email</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MessageSquare className="mr-2 h-4 w-4" />
									<span>Message</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<PlusCircle className="mr-2 h-4 w-4" />
									<span>More...</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						<Plus className="mr-2 h-4 w-4" />
						<span>New Team</span>
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup> */}
				<DropdownMenuSeparator />
				<LogoutTrigger asChild>
					<DropdownMenuItem className="cursor-pointer">
						<LogOutIcon className="mr-2 h-4 w-4" />
						<span>Log out</span>
					</DropdownMenuItem>
				</LogoutTrigger>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const getInitials = (name: string) => {
	const firstTwoLetters = name
		.split(" ")
		.slice(0, 2)
		.map((word) => word[0])
		.join("");
	return firstTwoLetters;
};

export default UserDropDown;
