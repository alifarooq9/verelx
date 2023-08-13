"use client";

import { FC } from "react";
import { signOut } from "next-auth/react";

const UsersHeader: FC = () => {
	return (
		<header>
			<button
				onClick={async () =>
					await signOut({
						callbackUrl: "/auth",
					})
				}
			>
				Signout
			</button>
		</header>
	);
};

export default UsersHeader;
