import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, MaximizeIcon } from "lucide-react";
import Link from "next/link";

const AuthPageLoading = () => {
	return (
		<div className="mx-auto w-full">
			<main className="min-h-screen grid grid-cols-1 xl:grid-cols-2">
				<div className="w-full p-6 sm:p-14">
					<Link
						href="/"
						className={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
								className: "flex items-center w-fit",
							})
						)}
					>
						<MaximizeIcon
							className="w-5 h-5 mr-2"
							strokeWidth={2}
						/>
						<span className="font-bold text-xl">Verelx</span>
					</Link>
					<div className="w-full max-w-sm mx-auto flex justify-center flex-col items-center h-full">
						<Loader2 className="animate-spin" />
					</div>
				</div>

				<div className="w-full bg-secondary opacity-50 sm:p-10 hidden xl:block"></div>
			</main>
		</div>
	);
};

export default AuthPageLoading;
