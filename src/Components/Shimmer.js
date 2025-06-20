import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="mainbody bg-emerald-100 dark:bg-slate-800 min-h-screen transition-colors duration-300">
      {/* Search + Filters Section */}
      <div className="options-div flex flex-col items-center pt-8 px-4 gap-4">
        {/* Search bar */}
        <div className="relative w-full max-w-xl">
          <Skeleton
            height={48}
            className="rounded-full"
            baseColor="#e2e8f0"
            highlightColor="#f8fafc"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              height={36}
              width={100}
              className="rounded-full"
              baseColor="#e2e8f0"
              highlightColor="#f8fafc"
            />
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="playlist-container flex flex-wrap justify-center gap-6 mt-10 px-6 sm:px-[8vw] pb-14">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-72 sm:h-[420px] h-[300px] bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex flex-col"
          >
            {/* Image skeleton */}
            <Skeleton
              className="rounded-xl"
              height={160}
              baseColor="#e2e8f0"
              highlightColor="#f8fafc"
            />

            <div className="mt-3 space-y-2">
              <Skeleton height={20} width="70%" />
              <Skeleton height={16} width="50%" />
              <Skeleton height={16} width="30%" />
              <Skeleton height={16} width="40%" />
              <Skeleton height={16} width="80%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
