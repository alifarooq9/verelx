import { stripe } from "@/lib/stripe";
import { absoluteURL } from "@/lib/utils";

export type StripeSubscriptionBodyType = {
    isSubscribed: boolean;
    stripeCustomerId?: string | null;
    isCurrentPlan: boolean;
    email: string;
    stripePriceId: string;
    userId: string;
};

export async function POST(request: Request) {
    const {
        isCurrentPlan,
        isSubscribed,
        stripeCustomerId,
        email,
        stripePriceId,
        userId,
    }: StripeSubscriptionBodyType = await request.json();

    const billingUrl = absoluteURL("/billing");

    if (isSubscribed && stripeCustomerId && isCurrentPlan) {
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: stripeCustomerId,
            return_url: billingUrl,
        });

        return new Response(JSON.stringify({ stripeUrl: stripeSession.url }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const stripeSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        customer_email: email,
        line_items: [
            {
                price: stripePriceId,
                quantity: 1,
            },
        ],
        metadata: {
            userId: userId,
        },
    });

    return new Response(JSON.stringify({ stripeUrl: stripeSession.url }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
