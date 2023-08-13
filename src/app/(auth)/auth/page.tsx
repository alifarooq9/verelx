import UserAuthForm from "@/components/auth/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MaximizeIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const AuthPage = async () => {
	const session = await getServerSession();

	if (session) {
		redirect("/dashboard");
	}

	return (
		<div className="mx-auto w-full">
			<main className="min-h-screen grid grid-cols-1 xl:grid-cols-2">
				<section className="w-full p-6 sm:p-14">
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

					<UserAuthForm />
				</section>
				<aside className="w-full bg-secondary opacity-50 sm:p-10 hidden xl:block"></aside>
			</main>
		</div>
	);
};

export default AuthPage;
