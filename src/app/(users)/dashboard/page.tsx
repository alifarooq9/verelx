import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const DashboardPage = async () => {
	const session = await getServerSession();
	console.log("session", session);

	return (
		<div>
			<h1>Dashboard</h1>
			{session?.user.name}
		</div>
	);
};

export default DashboardPage;
