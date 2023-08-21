import Header from "@/components/header";

interface Props {
    children: React.ReactNode;
}

const headerLinks = [
    {
        name: "Features",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/",
    },
    {
        name: "Testimonials",
        href: "/",
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
