"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import useSubscribe from "@/hooks/useSubscribe";

type PlansButtonProps = {
    stripePriceId: string;
    isCurrentPlan: boolean;
    isSubscribed: boolean;
    stripeCustomerId?: string | null;
};

const ManageSubscriptionBtn = ({
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
            className="flex items-center w-full sm:w-auto"
            size="lg"
        >
            {loading && <Loader2Icon className="animate-spin mr-2 w-4 h-4" />}
            {isSubscribed && "Manage Subscription"}
        </Button>
    );
};

export default ManageSubscriptionBtn;
