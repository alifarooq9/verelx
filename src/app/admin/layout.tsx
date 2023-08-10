import AdminHeader from "@/components/admin/admin-header";

interface Props {
	children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
	return (
		<div>
			<AdminHeader />
			{children}
		</div>
	);
};

export default AdminLayout;
