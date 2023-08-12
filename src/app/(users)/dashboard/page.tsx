"use client";

import { useSession } from "next-auth/react";

const DashboardPage = () => {
	const { data } = useSession();
	console.log(data);

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};

export default DashboardPage;
