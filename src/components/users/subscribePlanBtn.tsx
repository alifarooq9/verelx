"use client";

import { Variant } from "@/configs/plans";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import useSubscribe from "@/hooks/useSubscribe";

type PlansButtonProps = {
    variant: Variant;
    stripePriceId: string;
    isCurrentPlan: boolean;
    isSubscribed: boolean;
    stripeCustomerId?: string | null;
};

const SubscribeBtn = ({
    variant,
    stripePriceId,
    isCurrentPlan,
    isSubscribed,
    stripeCustomerId,
}: PlansButtonProps) => {
    const { loading, mutate: handleSubscribeOrManage } = useSubscribe();

    const handleOnClick = async () => {
        await handleSubscribeOrManage({
            isCurrentPlan,
            isSubscribed,
            stripePriceId,
            stripeCustomerId,
        });
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
