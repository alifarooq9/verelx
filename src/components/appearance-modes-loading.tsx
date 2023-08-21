import { Skeleton } from "./ui/skeleton";

const AppearanceModesLoading = () => {
    return (
        <div className="flex mt-5 space-x-8">
            <Skeleton className="w-48 h-44 rounded-lg" />
            <Skeleton className="w-48 h-44 rounded-lg" />
            <Skeleton className="w-48 h-44 rounded-lg" />
        </div>
    );
};

export default AppearanceModesLoading;
