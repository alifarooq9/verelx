import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { plans } from "@/configs/plans";
import { getUserSubscriptionPlan } from "@/lib/subscriptions";
import { TerminalIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    DrawerContent,
    DrawerIcon,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import PricingCard from "@/components/pricing-card";
import { getAuthSession } from "@/lib/auth-options";
import ManageSubscriptionBtn from "@/components/users/manageSubscriptionBtn";

const Billing = async () => {
    const session = await getAuthSession();

    const {
        isCanceled,
        isSubscribed,
        stripeCurrentPeriodEnd,
        stripePriceId,
        stripeCustomerId,
    } = await getUserSubscriptionPlan();

    const currentPlan = plans.find(
        (plan) => plan.stripePriceId === stripePriceId,
    );

    return (
        <main className="flex-grow sm:px-14 sm:py-14">
            <h1 className="font-semibold text-2xl py-6 border-b">Billing</h1>

            <section className="py-8 space-y-8">
                <Alert>
                    <TerminalIcon className="h-4 w-4" />
                    <AlertTitle>Heads up! Demo App Alert</AlertTitle>
                    <AlertDescription className="font-light text-muted-foreground">
                        Verelx is a demo app. to get successfull payments, use
                        4242 4242 4242 4242 as card number, any future date as
                        expiration date, and any 3 digits as CVC.
                    </AlertDescription>
                </Alert>

                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Plan</CardTitle>
                        <CardDescription>
                            You&apos;re currently on{" "}
                            <span className="font-extrabold">
                                {currentPlan?.name || "No"}
                            </span>{" "}
                            plan
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="font-medium">
                            {isCanceled ? (
                                <span>
                                    Your subscription is canceled. You can renew
                                    it anytime.
                                </span>
                            ) : isSubscribed ? (
                                <span>
                                    Your subscription is active. You can cancel
                                    it anytime.
                                </span>
                            ) : (
                                <span>
                                    You don&apos;t have any subscription. You
                                    can subscribe to a plan anytime.
                                </span>
                            )}
                        </p>
                        {stripeCurrentPeriodEnd && (
                            <p className="font-light text-muted-foreground">
                                {isCanceled ? (
                                    <span>Your subscription will end on </span>
                                ) : (
                                    <span>
                                        Your subscription will be renewed on{" "}
                                    </span>
                                )}
                                {format(stripeCurrentPeriodEnd as Date, "PPP")}
                            </p>
                        )}
                    </CardContent>
                    <CardFooter className="space-x-2">
                        {isSubscribed && (
                            <ManageSubscriptionBtn
                                isCurrentPlan={
                                    currentPlan?.stripePriceId === stripePriceId
                                }
                                isSubscribed={isSubscribed}
                                stripePriceId={stripePriceId as string}
                                stripeCustomerId={stripeCustomerId}
                            />
                        )}

                        <DrawerRoot>
                            <DrawerTrigger asChild>
                                <Button variant="secondary">
                                    {isSubscribed ? "Change Plan" : "Subscribe"}
                                </Button>
                            </DrawerTrigger>

                            <DrawerContent>
                                <DrawerIcon />

                                <div className="grid grid-cols-1 max-w-5xl mx-auto mb-14 md:grid-cols-3 gap-5 overflow-y-auto">
                                    {plans.map((plan) => (
                                        <PricingCard
                                            description={plan.description}
                                            features={plan.features}
                                            key={plan.name}
                                            name={plan.name}
                                            price={plan.price}
                                            session={session}
                                            stripePriceId={plan.stripePriceId}
                                            variant={plan.variant}
                                        />
                                    ))}
                                </div>
                            </DrawerContent>
                        </DrawerRoot>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
};

export default Billing;
