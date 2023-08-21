import { Skeleton } from "./ui/skeleton";

const AppearanceModesLoading = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 mt-5 gap-8">
            <Skeleton className="w-48 h-44 rounded-lg" />
            <Skeleton className="w-48 h-44 rounded-lg" />
            <Skeleton className="w-48 h-44 rounded-lg" />
        </div>
    );
};

export default AppearanceModesLoading;
