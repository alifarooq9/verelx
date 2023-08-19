import { getServerSession } from "next-auth";

const DashboardPage = async () => {
	const session = await getServerSession();

	return (
		<main className="flex-grow rounded-lg">
			<h1>Dashboard</h1>
			{session?.user.name}
		</main>
	);
};

export default DashboardPage;
