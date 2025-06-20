import { PLAYLIST_ICON } from "../utils/consonants";

const PlaylistCard = ({ dataofplaylist }) => {
  const {
    info: {
      cloudinaryImageId,
      name = "Unknown",
      locality = "Not Available",
      avgRating = "--",
      sla: { deliveryTime = "NA" } = {},
      cuisines = [],
    } = {},
  } = dataofplaylist;

  return (
    <div className="playlist-card w-72 sm:h-[420px] h-[300px] bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 p-4 flex flex-col justify-start">
      {/* Image */}
      <div className="img-card">
        <img
          className="object-cover w-full h-32 sm:h-40 rounded-xl"
          src={PLAYLIST_ICON + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Info */}
      <div className="playlist-info mt-2 flex flex-col gap-1">
        <h3 className="text-base sm:text-lg font-bold truncate">{name}</h3>
        <h4 className="text-sm text-gray-500 dark:text-gray-300 truncate">
          {locality}
        </h4>
        <p className="text-emerald-600 dark:text-emerald-300 font-semibold">
          {avgRating} ⭐
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {deliveryTime} min delivery
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-1 sm:line-clamp-2">
          {cuisines.length ? cuisines.join(", ") : "No cuisines listed"}
        </p>
      </div>
    </div>
  );
};

export const newPromotedCard = (PlaylistCard) => {
  return (props) => {
    const {
      dataofplaylist: {
        info: {
          aggregatedDiscountInfoV3: { header = "", subHeader = "" } = {},
        } = {},
      },
    } = props;

    return (
      <div className="relative">
        <PlaylistCard {...props} />
        {(header || subHeader) && (
          <div className="absolute -left-2 -bottom-[-10] bg-emerald-600 text-white text-sm px-3 py-1 rounded-md shadow-md font-semibold">
            {header} {subHeader}
          </div>
        )}
      </div>
    );
  };
};

export default PlaylistCard;
