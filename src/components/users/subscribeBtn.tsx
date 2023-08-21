"use client";

import { Variant } from "@/configs/plans";
import { Button } from "../ui/button";
import { useState } from "react";
import { StripeSubscriptionBodyType } from "@/app/api/stripe/manage-subscription/route";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { Loader2Icon } from "lucide-react";

type PlansButtonProps = {
    variant: Variant;
    stripePriceId: string;
    isCurrentPlan: boolean;
    isSubscribed: boolean;
    stripeCustomerId?: string | null;
    session: Session | null;
};

const SubscribeBtn = ({
    variant,
    stripePriceId,
    isCurrentPlan,
    isSubscribed,
    stripeCustomerId,
    session,
}: PlansButtonProps) => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    const plansButtonFetchBodyType: StripeSubscriptionBodyType = {
        isSubscribed,
        stripeCustomerId,
        isCurrentPlan,
        email: session?.user?.email as string,
        userId: session?.user?.id as string,
        stripePriceId,
    };

    const handleOnClick = async () => {
        setLoading(true);

        if (isSubscribed) {
            router.push("/billing");
            return;
        }

        try {
            const handleFetch = await fetch("/api/stripe/manage-subscription", {
                method: "POST",
                body: JSON.stringify(plansButtonFetchBodyType),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (handleFetch.ok) {
                const response = await handleFetch.json();

                if (session) {
                    router.push(response.stripeUrl);
                } else {
                    router.push("/billing");
                }
            }

            if (!handleFetch.ok) {
                toast({
                    description:
                        "Something went wrong. Please try again later.",
                });
                throw new Error(
                    "Something went wrong. Please try again later.",
                );
            }
        } catch (error) {
            toast({
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            disabled={loading}
            onClick={handleOnClick}
            className="w-full flex items-center"
            variant={variant === "highlighted" ? "default" : "secondary"}
            size="lg"
        >
            {loading && <Loader2Icon className="animate-spin mr-2 w-4 h-4" />}
            {isSubscribed && isCurrentPlan && "Manage"}
            {!isCurrentPlan && "Subscribe"}
        </Button>
    );
};

export default SubscribeBtn;
