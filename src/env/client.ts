import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    clientPrefix: "PUBLIC_",
    client: {
        PUBLIC_STRIPE_BASIC_PRICE_ID: z.string().min(1),
        PUBLIC_STRIPE_PREMIUM_PRICE_ID: z.string().min(1),
        PUBLIC_STRIPE_ELITE_PRICE_ID: z.string().min(1),
    },
    runtimeEnv: process.env,
});
