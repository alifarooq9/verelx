import { Skeleton } from "@/components/ui/skeleton";
import AppearanceModesLoading from "@/components/users/appearance-modes-loading";

const AppearanceLoading = () => {
    return (
        <div className="flex-grow px-14 py-14">
            <div className="py-6 border-b">
                <Skeleton className="w-48 h-8" />
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
