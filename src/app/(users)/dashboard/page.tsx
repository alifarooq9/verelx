import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { plans } from "@/configs/plans";
import { getAuthSession } from "@/lib/auth-options";
import { getUserSubscriptionPlan } from "@/lib/subscriptions";
import { cn } from "@/lib/utils";
import { MaximizeIcon } from "lucide-react";
import type { Session } from "next-auth";
import Link from "next/link";
import { Fragment } from "react";

const DashboardPage = async () => {
    const session = await getAuthSession();
    const { stripePriceId, isSubscribed } = await getUserSubscriptionPlan();

    return (
        <main className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6">
                <h1 className="font-semibold text-2xl">Dashboard</h1>
                <p className="font-light text-muted-foreground">
                    This is your subscription dashboard
                </p>
            </div>
            <section className="py-8">
                {isSubscribed ? (
                    <HaveMembership
                        session={session}
                        stripePriceId={stripePriceId as string}
                    />
                ) : (
                    <DontHaveMembership />
                )}
            </section>
        </main>
    );
};

type HaveMembershipProps = {
    session: Session | null;
    stripePriceId: string;
};

const HaveMembership = async ({
    session,
    stripePriceId,
}: HaveMembershipProps) => {
    const currentPlan = plans.find(
        (plan) => plan.stripePriceId === stripePriceId,
    );

    return (
        <Fragment>
            <section>
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            Membership Card
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="my-3">
                        <h4 className="font-bold text-3xl">
                            {currentPlan?.name} Plan
                        </h4>
                        <CardDescription className="text-base">
                            You&apos;re currently on{" "}
                            <span className="font-extrabold">
                                {currentPlan?.name || "No"}
                            </span>{" "}
                            plan
                        </CardDescription>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center">
                        <h5 className="font-semibold text-muted-foreground">
                            {session?.user.name}
                        </h5>

                        <div className="flex items-center ">
                            <MaximizeIcon
                                className="w-4 h-4 mr-2"
                                strokeWidth={2}
                            />
                            <span className="font-bold text-lg">Verelx</span>
                        </div>
                    </CardFooter>
                </Card>
            </section>
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
