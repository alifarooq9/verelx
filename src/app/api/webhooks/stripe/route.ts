import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(request: Request) {
    const body = await request.text();
    const signature = headers().get("Stripe-Signature") ?? "";

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            "whsec_3be25ea93c2691f2e243c0b69047e03d28e4237bdfccde8b82a2e833ddf57b99",
        );
    } catch (error) {
        return new Response(
            `Webhook Error: ${
                error instanceof Error ? error.message : "Unknown error"
            }`,
            { status: 400 },
        );
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (!session?.metadata?.userId) {
        return new Response(null, { status: 200 });
    }

    if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string,
        );

        const user = await prisma.user.update({
            where: {
                id: session.metadata.userId,
            },
            data: {
                stripeSubscriptionId: subscription.id,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000,
                ),
                stripeCustomerId: subscription.customer as string,
            },
        });

    }

    if (event.type === "invoice.payment_succeeded") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string,
        );

        await prisma.user.update({
            where: {
                id: session.metadata.userId,
            },
            data: {
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000,
                ),
            },
        });
    }

    return new Response(null, { status: 200 });
}
