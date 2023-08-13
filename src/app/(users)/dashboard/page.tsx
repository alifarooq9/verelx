import { redirectProtectedRoutes } from "@/lib/redirect-routes";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
	const session = await getServerSession();

	await redirectProtectedRoutes({ session, url: "/auth" });

	return (
		<div>
			<h1>Dashboard</h1>
			{session?.user.name}
		</div>
	);
};

export default DashboardPage;
