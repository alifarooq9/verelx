import UserSidebar from "@/components/users/user-sidebar";
import { redirectProtectedRoutes } from "@/lib/redirect-routes";
import { getServerSession } from "next-auth";

interface Props {
	children: React.ReactNode;
}

const UsersLayout = async ({ children }: Props) => {
	const session = await getServerSession();

	await redirectProtectedRoutes({ session, url: "/auth" });

	return (
		<div className="h-screen flex">
			<UserSidebar />
			{children}
		</div>
	);
};

export default UsersLayout;
