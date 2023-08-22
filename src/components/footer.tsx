import { MaximizeIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-8 border-t">
            <div className="container w-full flex items-center">
                <MaximizeIcon className="w-5 h-5 mr-2" strokeWidth={2} />
                <p className="font-light text-primary/80">
                    Built by{" "}
                    <span>
                        <Link
                            href="https://www.alidotm.me/"
                            target="_blank"
                            className="underline"
                        >
                            Ali
                        </Link>
                    </span>
                    . Hosted on{" "}
                    <span>
                        <Link
                            href="https://vercel.com/"
                            target="_blank"
                            className="underline"
                        >
                            Vercel
                        </Link>
                    </span>
                    . The source code is available on{" "}
                    <span>
                        <Link
                            href="https://github.com/alidotm/verelx"
                            target="_blank"
                            className="underline"
                        >
                            Github
                        </Link>
                    </span>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
