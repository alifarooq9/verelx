import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Home = () => {
    return (
        <main className="">
            <section
                aria-label="landing"
                className="container py-28 max-w-6xl mx-auto px-4"
            >
                <div className="flex flex-col items-center space-y-6">
                    <Link
                        href="https://twitter.com/heyimalim"
                        target="_blank"
                        className="bg-accent text-sm sm:text-base text-center rounded-lg w-fit px-4 py-1 ring-style"
                    >
                        <strong>
                            <span className="font-semibold">Follow me </span>
                            <span className="font-light">
                                On{" "}
                                <span className="font-semibold">{`X (Twitter)`}</span>{" "}
                            </span>
                        </strong>
                    </Link>

                    <h1 className="sm:leading-[1.2] font-bold text-4xl sm:text-6xl max-w-4xl text-center">
                        An Example Next.js 13 Server Components App with Stripe
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl font-light text-muted-foreground text-center">
                        Verelx is a demo app that shows how to use{" "}
                        <span>
                            <Link
                                href="https://nextjs.org/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Next.js 13
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://authjs.dev/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Next-Auth
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Typescript
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://www.prisma.io/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Prisma
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://stripe.com/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Stripe
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://tailwindcss.com/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                TailwindCss
                            </Link>
                        </span>
                        ,{" "}
                        <span>
                            <Link
                                href="https://ui.shadcn.com/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                Shadcn/ui
                            </Link>
                        </span>
                        , and{" "}
                        <span>
                            <Link
                                href="https://vaul.emilkowal.ski/"
                                target="_blank"
                                className="font-semibold underline underline-offset-4"
                            >
                                vaul
                            </Link>
                        </span>
                    </p>

                    <div className="flex items-center space-x-3">
                        <Link
                            href="/auth"
                            className={cn(
                                buttonVariants({
                                    size: "lg",
                                    variant: "default",
                                    className: "text-base",
                                }),
                            )}
                        >
                            Get Started
                        </Link>
                        <Link
                            href="https://github.com/alidotm/verelx"
                            target="_blank"
                            className={cn(
                                buttonVariants({
                                    size: "lg",
                                    variant: "secondary",
                                    className: "text-base",
                                }),
                            )}
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
