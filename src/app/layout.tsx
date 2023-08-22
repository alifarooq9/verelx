import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/components/providers";
import { LogoutModel } from "@/components/logout";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Verelx | Made by Ali",
    description:
        "Gym management software with Next.js 13 Server Components, Prisma, Typescript, Stripe, Next-auth, Vaul and Shadcn/ui | made by Ali",
};

const font = localFont({
    src: [
        {
            path: "../fonts/BricolageGrotesque-ExtraLight.woff2",
            weight: "200",
            style: "extralight",
        },
        {
            path: "../fonts/BricolageGrotesque-Light.woff2",
            weight: "300",
            style: "light",
        },
        {
            path: "../fonts/BricolageGrotesque-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/BricolageGrotesque-Medium.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "../fonts/BricolageGrotesque-SemiBold.woff2",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../fonts/BricolageGrotesque-Bold.woff2",
            weight: "700",
            style: "bold",
        },
        {
            path: "../fonts/BricolageGrotesque-ExtraBold.woff2",
            weight: "800",
            style: "extrabold",
        },
    ],
    preload: true,
    variable: "--local-font",
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    font.variable,
                    "tracking-normal overflow-x-hidden w-screen",
                )}
            >
                <Providers>
                    <LogoutModel />
                    {children}
                    <Footer />
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
