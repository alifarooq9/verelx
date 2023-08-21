import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

const DashboardPage = async () => {
    const session = await getAuthSession();

    return (
        <main className="flex-1 sm:px-14 sm:py-14">
            <h1 className="font-semibold text-2xl py-6 border-b">Dashboard</h1>
            <section className="py-8">
                {session?.user.role === "MEMBER" ? (
                    <HaveMembership />
                ) : (
                    <DontHaveMembership />
                )}
            </section>
        </main>
    );
};

const HaveMembership = () => {
    return (
        <Fragment>
            <h2 className="font-medium">Membership</h2>
            <p className="text-muted-foreground text-sm font-light">
                Verelx gym membership
            </p>
        </Fragment>
    );
};

const DontHaveMembership = () => {
    return (
        <Fragment>
            <h3 className="text-lg mb-3">You don not have any membership</h3>
            <Link
                href="/billing"
                className={cn(buttonVariants({ size: "lg" }))}
            >
                <span>Buy a Membership</span>
            </Link>
        </Fragment>
    );
};

export default DashboardPage;
