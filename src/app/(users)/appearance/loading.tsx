import { Skeleton } from "@/components/ui/skeleton";
import AppearanceModesLoading from "@/components/appearance-modes-loading";

const AppearanceLoading = () => {
    return (
        <div className="flex-1 sm:px-10 py-6 sm:py-10">
            <div className="border-b pb-6 space-y-2">
                <Skeleton className="w-48 h-9" />
                <Skeleton className="w-full max-w-2xl h-5" />
            </div>

            <div className="py-8">
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-24 h-4 mt-2" />

                <AppearanceModesLoading />
            </div>
        </div>
    );
};

export default AppearanceLoading;
