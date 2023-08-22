import Header, { type LinkType } from "@/components/header";

interface Props {
    children: React.ReactNode;
}

const headerLinks: LinkType[] = [
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Github",
        href: "https://github.com/alidotm/verelx",
        target: "_blank",
    },
    {
        name: "My website",
        href: " https://www.alidotm.me/",
        target: "_blank",
    },
];

const WebLayout = ({ children }: Props) => {
    return (
        <div className="min-h-[calc(100vh-6rem)]">
            <Header links={headerLinks} />
            {children}
        </div>
    );
};

export default WebLayout;
