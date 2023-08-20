import { env } from "@/env/client";

export type PlanType = {
    name: string;
    description: string;
    price: number;
    features: string[];
    variant: "default" | "highlighted";
    stripePriceId: string;
};

export const plans: PlanType[] = [
    {
        name: "Basic",
        description:
            "Get started with our Basic Membership plan designed for beginners.",
        price: 29,
        features: [
            "Access to cardio and strength training equipment",
            "Complimentary fitness assessment",
            "Unlimited access during regular hours",
            "Locker room and shower facilities",
        ],
        variant: "default",
        stripePriceId: env.PUBLIC_STRIPE_BASIC_PRICE_ID,
    },
    {
        name: "Premium",
        description:
            "Elevate your fitness journey with our Premium Membership for a more",
        price: 49,
        features: [
            "All Basic Membership benefits",
            "Unlimited access to group fitness classes",
            "Personalized workout plans",
            "Nutritional guidance from our experts",
        ],
        variant: "highlighted",
        stripePriceId: env.PUBLIC_STRIPE_PREMIUM_PRICE_ID,
    },
    {
        name: "Elite",
        description:
            "Take your fitness to the next level with our Elite Membership, perfect for dedicated fitness enthusiasts.",
        price: 79,
        features: [
            "All Premium Membership benefits",
            "24/7 gym access",
            "Priority booking for group classes",
            "Access to exclusive training workshops",
        ],
        variant: "default",
        stripePriceId: env.PUBLIC_STRIPE_ELITE_PRICE_ID,
    },
];
