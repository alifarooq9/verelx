import { plans } from "@/configs/plans";
import { prisma } from "./db";
import { stripe } from "./stripe";
import type { Session } from "next-auth";

type Props = {
    session: Session | null;
};

export const getUserSubscriptionPlan = async ({ session }: Props) => {
    if (!session || !session.user) throw new Error("User not found.");

    const user = await prisma.user.findFirst({
        where: {
            id: session.user.id,
        },
    });

    if (!user) throw new Error("User not found.");

    const isSubscribed =
        user.stripePriceId &&
        user.stripeCurrentPeriodEnd &&
        user.stripeCurrentPeriodEnd.getTime() + 86400000 > Date.now();

    const plan = isSubscribed
        ? plans.find((plan) => plan.stripePriceId === user.stripePriceId)
        : null;

    let isCanceled = false;

    if (isSubscribed && user.stripeSubscriptionId) {
        const stripePlan = await stripe.subscriptions.retrieve(
            user.stripeSubscriptionId,
        );

        isCanceled = stripePlan.cancel_at_period_end;
    }

    return {
        ...plan,
        stripeSubscriptionId: user.stripeSubscriptionId,
        stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd,
        stripeCustomerId: user.stripeCustomerId,
        isSubscribed,
        isCanceled,
    };
};
