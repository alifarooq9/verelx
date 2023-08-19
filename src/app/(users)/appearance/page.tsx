import { getServerSession } from "next-auth";

const DashboardPage = async () => {
	const session = await getServerSession();

	return (
		<main className="w-full rounded-lg">
			<h1>Appearance</h1>
			{session?.user.name}
		</main>
	);
};

export default DashboardPage;
