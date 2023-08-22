import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
    return (
        <div className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6 space-y-2">
                <Skeleton className="w-48 h-9" />
                <Skeleton className="w-full max-w-2xl h-5" />
            </div>

            <section className="py-8 space-y-8">
                <Skeleton className="w-full h-48" />
            </section>
        </div>
    );
};

export default DashboardLoading;
