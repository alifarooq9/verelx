import Header from "@/components/header";
import UserSidebar from "@/components/sidebar";
import { getAuthSession } from "@/lib/auth-options";
import { redirectProtectedRoutes } from "@/lib/redirect-routes";
import { Fragment } from "react";

interface Props {
    children: React.ReactNode;
}

const headerLinks = [
    {
        name: "Features",
        href: "/",
    },
];

const UsersLayout = async ({ children }: Props) => {
    const session = await getAuthSession();

    await redirectProtectedRoutes({ session, url: "/auth" });

    return (
        <Fragment>
            <Header links={headerLinks} />
            <div className="h-screen flex container mx-auto w-screen overflow-x-hidden">
                <UserSidebar session={session} />
                {children}
            </div>
        </Fragment>
    );
};

export default UsersLayout;
