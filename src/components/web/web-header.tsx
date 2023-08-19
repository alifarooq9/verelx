import Link from "next/link";
import { MaximizeIcon, LogInIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { getServerSession } from "next-auth";
import { Fragment } from "react";
import UserDropDown from "../auth/user-dropdown";

const links = [
	{
		name: "Features",
		href: "/",
	},
	{
		name: "Pricing",
		href: "/",
	},
	{
		name: "Testimonials",
		href: "/",
	},
];

const WebHeader = async () => {
	const session = await getServerSession();

	return (
		<header className="w-full sticky top-0 h-14 border-b flex items-center">
			<div className="mx-auto container  flex justify-between items-center">
				<section className="flex items-center space-x-4">
					<Link
						href="/"
						className={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
								className: "flex items-center",
							})
						)}
					>
						<MaximizeIcon
							className="w-5 h-5 mr-2"
							strokeWidth={2}
						/>
						<span className="font-bold text-xl">Verelx</span>
					</Link>
					<nav>
						<ul className="flex items-center">
							{links.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className={cn(
											buttonVariants({
												size: "sm",
												variant: "link2",
											})
										)}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>

				<section className="flex justify-between space-x-3 items-center">
					{session ? (
						<UserDropDown session={session} />
					) : (
						<Fragment>
							<Link
								href="/auth"
								className={cn(
									buttonVariants({
										variant: "secondary",
										size: "sm",
									})
								)}
							>
								Login
							</Link>
							<Link
								href="/auth "
								className={cn(
									buttonVariants({
										variant: "default",
										size: "sm",
									})
								)}
							>
								Get Started For Free
							</Link>
						</Fragment>
					)}
				</section>
			</div>
		</header>
	);
};

export default WebHeader;
