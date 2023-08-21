import Link from "next/link";
import { MaximizeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Fragment } from "react";
import UserDropDown from "@/components/user-dropdown";
import { getAuthSession } from "@/lib/auth-options";

type LinkType = {
    name: string;
    href: string;
};

type HeaderProps = {
    links: LinkType[];
};

const Header = async ({ links }: HeaderProps) => {
    const session = await getAuthSession();

    return (
        <header className="w-full sticky top-0 h-16 border-b flex items-center">
            <div className="mx-auto w-full px-4 flex justify-between items-center">
                <section className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center">
                        <MaximizeIcon
                            className="w-5 h-5 mr-2"
                            strokeWidth={2}
                        />
                        <span className="font-bold text-xl">Verelx</span>
                    </Link>
                    <nav>
                        <ul className="flex items-center">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            buttonVariants({
                                                size: "sm",
                                                variant: "link2",
                                            }),
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                <section className="flex justify-between space-x-3 items-center">
                    {session ? (
                        <UserDropDown session={session} />
                    ) : (
                        <Fragment>
                            <Link
                                href="/auth"
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                    }),
                                )}
                            >
                                Login
                            </Link>
                            <Link
                                href="/auth "
                                className={cn(
                                    buttonVariants({
                                        variant: "default",
                                        size: "sm",
                                    }),
                                )}
                            >
                                Get Started For Free
                            </Link>
                        </Fragment>
                    )}
                </section>
            </div>
        </header>
    );
};

export default Header;
