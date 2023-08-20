import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/env/server";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import { Adapter } from "node_modules/next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import { User } from "@prisma/client";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string;
        } & User;
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

export const authOptions: NextAuthOptions = {
    secret: env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: env.SMTP_HOST,
                port: parseInt(env.SMTP_PORT),
                auth: {
                    user: env.SMTP_USER,
                    pass: env.SMTP_PASSWORD,
                },
            },
            from: env.EMAIL_FROM,
        }),
    ],
};

export const getAuthSession = async () => {
    return await getServerSession(authOptions);
};
