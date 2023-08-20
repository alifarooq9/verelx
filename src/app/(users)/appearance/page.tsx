import AppearanceModesLoading from "@/components/users/appearance-modes-loading";
import dynamic from "next/dynamic";

const AppearanceModes = dynamic(
    () => import("@/components/users/appearance-modes"),
    { ssr: false, loading: () => <AppearanceModesLoading /> },
);

const DashboardPage = async () => {
    return (
        <main className="flex-grow px-14 py-14">
            <h1 className="font-semibold text-2xl py-6 border-b">Appearance</h1>

            <section className="py-8">
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
