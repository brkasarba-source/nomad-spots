export default function SpotCardSkeleton() {
    return (
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mb-6 animate-pulse">
            {/* Image Skeleton */}
            <div className="relative h-64 w-full bg-gray-200" />

            {/* Content Skeleton */}
            <div className="px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gray-200" />
                    <div className="h-3 w-32 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
}
