import Link from "next/link";
import { AlignJustifyIcon, MaximizeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Fragment } from "react";
import UserDropDown from "@/components/user-dropdown";
import { getAuthSession } from "@/lib/auth-options";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <div className="mx-auto w-full max-w-7xl px-4 flex justify-between items-center">
                <section className="flex items-center">
                    <HeaderMenu links={links} />

                    <Link href="/" className="flex items-center ">
                        <MaximizeIcon
                            className="w-5 h-5 mr-2"
                            strokeWidth={2}
                        />
                        <span className="font-bold text-xl">Verelx</span>
                    </Link>

                    <ul className="hidden items-center sm:flex ml-4">
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

type HeaderMenuProps = {
    links: LinkType[];
};

const HeaderMenu = ({ links }: HeaderMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="sm:hidden block">
                <AlignJustifyIcon className="w-5 h-5 mr-4" strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 block sm:hidden">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup asChild>
                    <nav>
                        {links.map((link) => (
                            <DropdownMenuItem key={link.href} asChild>
                                <li>
                                    <Link
                                        href={link.href}
                                        className="cursor-pointer"
                                    >
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            </DropdownMenuItem>
                        ))}
                    </nav>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Header;
