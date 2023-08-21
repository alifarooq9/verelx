import { PlanType } from "@/configs/plans";
import { getUserSubscriptionPlan } from "@/lib/subscriptions";
import { Session } from "next-auth";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon } from "lucide-react";
import SubscribeBtn from "./subscribePlanBtn";

const PricingCard = async ({
    description,
    features,
    name,
    price,
    variant,
    session,
    stripePriceId,
}: PlanType & { session: Session | null }) => {
    const subscriptionPlan = await getUserSubscriptionPlan();

    return (
        <Card
            className={cn(
                "max-w-none md:max-w-xs flex flex-col",
                variant === "highlighted" && "bg-muted",
            )}
        >
            <CardHeader>
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
                <SubscribeBtn
                    variant={variant}
                    isCurrentPlan={
                        subscriptionPlan.stripePriceId === stripePriceId
                    }
                    stripePriceId={stripePriceId}
                    isSubscribed={!!subscriptionPlan.isSubscribed}
                    stripeCustomerId={subscriptionPlan.stripeCustomerId}
                />
            </CardFooter>
        </Card>
    );
};

export default PricingCard;
