import UserHeader from "@/components/users/user-header";
import UserSidebar from "@/components/users/user-sidebar";
import { getAuthSession } from "@/lib/auth-options";
import { redirectProtectedRoutes } from "@/lib/redirect-routes";
import { Fragment } from "react";

interface Props {
    children: React.ReactNode;
}

const UsersLayout = async ({ children }: Props) => {
    const session = await getAuthSession();

    await redirectProtectedRoutes({ session, url: "/auth" });

    return (
        <Fragment>
            <UserHeader />
            <div className="h-screen flex container mx-auto w-screen overflow-x-hidden">
                <UserSidebar session={session} />
                {children}
            </div>
        </Fragment>
    );
};

export default UsersLayout;
