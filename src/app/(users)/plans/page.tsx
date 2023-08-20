import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import PlansButton from "@/components/users/plansButton";
import { PlanType, plans } from "@/configs/plans";
import { getAuthSession } from "@/lib/auth-options";
import { getUserSubscriptionPlan } from "@/lib/subscriptions";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon } from "lucide-react";
import { Session } from "next-auth";

const PlansPage = async () => {
    const session = await getAuthSession();

    return (
        <main className="flex-grow px-14 py-14">
            <h1 className="font-semibold text-2xl py-6 border-b">Plans</h1>

            <section className="py-8 grid grid-cols-3 gap-5">
                {plans.map((plan) => (
                    <PricingCard
                        description={plan.description}
                        features={plan.features}
                        name={plan.name}
                        price={plan.price}
                        variant={plan.variant}
                        key={plan.name}
                        stripePriceId={plan.stripePriceId}
                        session={session}
                    />
                ))}
            </section>
        </main>
    );
};

const PricingCard = async ({
    description,
    features,
    name,
    price,
    variant,
    session,
    stripePriceId,
}: PlanType & { session: Session | null }) => {
    const subscriptionPlan = await getUserSubscriptionPlan({ session });

    return (
        <Card
            className={cn(
                "max-w-xs flex flex-col",
                variant === "highlighted" && "bg-muted",
            )}
        >
            <CardHeader className="space-y-4">
                <CardTitle className="font-semibold">{name}</CardTitle>
                <CardDescription className="font-light">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
                <div className="flex justify-start items-center">
                    <span className="text-4xl font-semibold">$</span>
                    <span className="text-6xl font-semibold">{price}</span>
                    <span className="text-4xl font-semibold">/mo</span>
                </div>
                <ul className="space-y-2 mt-5">
                    {features.map((feature) => (
                        <li key={feature} className="flex space-x-2">
                            <div>
                                <CheckCircle2Icon
                                    className={cn(
                                        "fill-green-600 w-6 h-6",
                                        variant === "highlighted"
                                            ? "stroke-muted"
                                            : "stroke-background",
                                    )}
                                />
                            </div>
                            <span className="font-light">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <PlansButton
                    variant={variant}
                    isCurrentPlan={
                        subscriptionPlan.stripePriceId === stripePriceId
                    }
                    session={session}
                    stripePriceId={stripePriceId}
                    isSubscribed={!!subscriptionPlan.isSubscribed}
                    stripeCustomerId={subscriptionPlan.stripeCustomerId}
                />
            </CardFooter>
        </Card>
    );
};

export default PlansPage;
