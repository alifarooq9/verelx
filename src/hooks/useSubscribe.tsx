"use client";

import { useState } from "react";
import { StripeSubscriptionBodyType } from "@/app/api/stripe/manage-subscription/route";
import { toast } from "@/components/ui/use-toast";
import type { Variant } from "@/configs/plans";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type UseSubscribeProps = {
    stripePriceId: string;
    isCurrentPlan: boolean;
    isSubscribed: boolean;
    stripeCustomerId?: string | null;
};

const useSubscribe = () => {
    const router = useRouter();

    const { data: session } = useSession();

    const [loading, setLoading] = useState<boolean>(false);

    const mutate = async ({
        isCurrentPlan,
        isSubscribed,
        stripePriceId,
        stripeCustomerId,
    }: UseSubscribeProps) => {
        const plansButtonFetchBodyType: StripeSubscriptionBodyType = {
            isSubscribed,
            stripeCustomerId,
            isCurrentPlan,
            email: session?.user?.email as string,
            userId: session?.user?.id as string,
            stripePriceId,
        };

        setLoading(true);

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

    return {
        mutate,
        loading,
    };
};

export default useSubscribe;
