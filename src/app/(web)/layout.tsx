import Header, { type LinkType } from "@/components/header";

interface Props {
    children: React.ReactNode;
}

const headerLinks: LinkType[] = [
    {
        name: "Features",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/",
    },
    {
        name: "Github",
        href: "https://github.com/alidotm/verelx",
        target: "_blank",
    },
];

const WebLayout = ({ children }: Props) => {
    return (
        <div>
            <Header links={headerLinks} />
            {children}
        </div>
    );
};

export default WebLayout;
