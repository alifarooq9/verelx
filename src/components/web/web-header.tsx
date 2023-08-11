import Link from "next/link";
import { FC } from "react";
import { MaximizeIcon, LogInIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const WebHeader: FC = () => {
	return (
		<header className="w-full sticky top-0 h-14 border-b flex items-center">
			<nav className="mx-auto container  flex justify-between items-center">
				<div className="flex items-center space-x-4">
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

					<div className="flex items-center">
						<Link
							href="/"
							className={cn(
								buttonVariants({
									size: "sm",
									variant: "link2",
								})
							)}
						>
							Features
						</Link>
						<Link
							href="/"
							className={cn(
								buttonVariants({
									size: "sm",
									variant: "link2",
								})
							)}
						>
							Testimonials
						</Link>
						<Link
							href="/"
							className={cn(
								buttonVariants({
									size: "sm",
									variant: "link2",
								})
							)}
						>
							Pricing
						</Link>
					</div>
				</div>

				<div className="flex justify-between space-x-3 items-center">
					<Link
						href="/auth"
						className={cn(
							buttonVariants({ variant: "secondary", size: "sm" })
						)}
					>
						Login
					</Link>
					<Link
						href="/auth "
						className={cn(
							buttonVariants({ variant: "default", size: "sm" })
						)}
					>
						Get Started For Free
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default WebHeader;
