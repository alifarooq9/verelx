import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, MaximizeIcon } from "lucide-react";

const AuthPageLoading = async () => {
    return (
        <div className="mx-auto w-full">
            <main className="min-h-screen grid grid-cols-1 xl:grid-cols-2">
                <section className="w-full p-6 sm:p-14">
                    <a
                        href="/"
                        className={cn(
                            buttonVariants({
                                size: "sm",
                                variant: "ghost",
                                className: "flex items-center w-fit",
                            }),
                        )}
                    >
                        <MaximizeIcon
                            className="w-5 h-5 mr-2"
                            strokeWidth={2}
                        />
                        <span className="font-bold text-xl">Verelx</span>
                    </a>
                    <div className="w-full max-w-sm mx-auto flex justify-center flex-col items-center h-full">
                        <Loader2 className="animate-spin" />
                    </div>
                </section>

                <aside className="w-full bg-secondary opacity-50 sm:p-10 hidden xl:block"></aside>
            </main>
        </div>
    );
};

export default AuthPageLoading;
