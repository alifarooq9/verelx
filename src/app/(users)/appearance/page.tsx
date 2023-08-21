import AppearanceModesLoading from "@/components/appearance-modes-loading";
import dynamic from "next/dynamic";

const AppearanceModes = dynamic(() => import("@/components/appearance-modes"), {
    ssr: false,
    loading: () => <AppearanceModesLoading />,
});

const DashboardPage = async () => {
    return (
        <main className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6">
                <h1 className="font-semibold text-2xl">Appearance</h1>
                <p className="font-light text-muted-foreground">
                    Change your UI theme here
                </p>
            </div>

            <section className="py-8 w-fit">
                <h2 className="font-medium">Theme</h2>
                <p className="text-muted-foreground text-sm font-light">
                    Customize your UI theme
                </p>

                <AppearanceModes />
            </section>
        </main>
    );
};

export default DashboardPage;
