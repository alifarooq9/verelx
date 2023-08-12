import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth'
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
        clientId: '647783362803-brlmsbmgpp52pf30o12v1v20b465pnpo.apps.googleusercontent.com',
        clientSecret: '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',
        }),
    ],
};
