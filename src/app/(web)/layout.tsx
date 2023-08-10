import WebHeader from "@/components/web/web-header";

interface Props {
	children: React.ReactNode;
}

const WebLayout = ({ children }: Props) => {
	return (
		<div>
			<WebHeader />
			{children}
		</div>
	);
};

export default WebLayout;
