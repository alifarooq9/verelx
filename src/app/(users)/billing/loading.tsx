import { Skeleton } from "@/components/ui/skeleton";

const BillingLoading = () => {
    return (
        <main className="flex-1 sm:px-14 sm:py-14">
            <div className="py-6 border-b">
                <Skeleton className="w-48 h-8" />
            </div>

            <section className="py-8 space-y-8">
                <Skeleton className="w-full h-20" />

                <Skeleton className="w-full h-48" />
            </section>
        </main>
    );
};

export default BillingLoading;
