import UsersHeader from "@/components/users/users-header";

interface Props {
	children: React.ReactNode;
}

const UsersLayout = ({ children }: Props) => {
	return (
		<div>
			<UsersHeader />
			{children}
		</div>
	);
};

export default UsersLayout;
