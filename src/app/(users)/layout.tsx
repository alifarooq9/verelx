import Header, { LinkType } from "@/components/header";
import UserSidebar from "@/components/sidebar";
import { getAuthSession } from "@/lib/auth-options";
import { redirectProtectedRoutes } from "@/lib/redirect-routes";
import { Fragment } from "react";

interface Props {
    children: React.ReactNode;
}

const headerLinks: LinkType[] = [
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

const UsersLayout = async ({ children }: Props) => {
    const session = await getAuthSession();

    await redirectProtectedRoutes({ session, url: "/auth" });

    return (
        <div className="min-h-[calc(100vh-6rem)]">
            <Header links={headerLinks} />
            <div className="flex container mx-auto w-screen overflow-x-hidden">
                <UserSidebar session={session} />
                {children}
            </div>
        </div>
    );
};

export default UsersLayout;
