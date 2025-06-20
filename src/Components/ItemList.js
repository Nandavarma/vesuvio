import { useSelector } from "react-redux";
import { PLAYLIST_ICON } from "../utils/consonants";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import TruncatedText from "./TruncatedText";
import useCartHandlers from "../utils/useCartHandlers";

const ItemList = ({ data }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const { handleIncreament, handleDecreament } = useCartHandlers();

  return (
    <div className="space-y-6 px-4 md:px-0">
      {data.map((item) => {
        const info = item.card.info;
        const price = info?.price ? info.price / 100 : info.defaultPrice / 100;
        const quantity = cartItems[info.id]?.frequency || "ADD";

        return (
          <div
            key={info.id}
            className="flex flex-col md:flex-row justify-between items-start border-b-2 pb-6 gap-4 md:gap-0"
          >
            {/* Left: Text Info */}
            <div className="w-full md:w-9/12 text-left">
              <h2 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-gray-200">
                {info.name}
              </h2>
              <p className="text-md text-gray-700 dark:text-gray-300 mt-1 mb-1">
                ₹ {price}
              </p>
              <TruncatedText
                text={info?.description}
                wordLimit={25}
                className="text-sm text-gray-600 dark:text-gray-400"
              />
            </div>

            {/* Right: Image + Button */}
            <div className="w-full md:w-3/12 flex flex-col items-center relative">
              <img
                src={PLAYLIST_ICON + info.imageId}
                alt="image unavailable"
                className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-lg shadow-md"
              />

              {/* Bottom-centered controls */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex justify-center bg-white border border-gray-300 shadow-md text-green-600 rounded-md px-4 py-1 font-semibold hover:bg-black hover:text-white transition-all duration-200">
                <button
                  className="text-xl px-2"
                  onClick={() => handleDecreament(info.id)}
                >
                  <BsDashLg />
                </button>
                <span className="mx-2 text-sm">{quantity}</span>
                <button
                  className="text-xl px-2"
                  onClick={() => handleIncreament(info.id, item)}
                >
                  <BsPlusLg />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
