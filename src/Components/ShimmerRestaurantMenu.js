import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerRestaurantMenu = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 text-center">
      {/* Banner Skeleton */}
      <div className="w-full h-64 mb-6 rounded-xl overflow-hidden">
        <Skeleton height="100%" />
      </div>

      {/* Title & Subtitle */}
      <div className="mb-2">
        <Skeleton height={32} width={240} className="mx-auto mb-2" />
        <Skeleton height={20} width={300} className="mx-auto" />
      </div>

      {/* Categories */}
      <div className="space-y-8 mt-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="text-left space-y-3">
              {/* Category title */}
              <Skeleton height={24} width={180} />

              {/* Items inside category */}
              {Array(2)
                .fill(0)
                .map((__, j) => (
                  <div key={j} className="flex justify-between items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <Skeleton height={20} width="60%" />
                      <Skeleton height={16} width="80%" />
                      <Skeleton height={12} width="90%" />
                    </div>
                    <Skeleton
                      height={80}
                      width={80}
                      className="rounded-lg"
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerRestaurantMenu;
