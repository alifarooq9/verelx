import UserSidebar from "@/components/users/user-sidebar";
import { getAuthSession } from "@/lib/auth-options";
import { redirectProtectedRoutes } from "@/lib/redirect-routes";

interface Props {
    children: React.ReactNode;
}

const UsersLayout = async ({ children }: Props) => {
    const session = await getAuthSession();

    await redirectProtectedRoutes({ session, url: "/auth" });

    return (
        <div className="h-screen flex container mx-auto">
            <UserSidebar session={session} />
            {children}
        </div>
    );
};

export default UsersLayout;
