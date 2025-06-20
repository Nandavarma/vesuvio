import { PLAYLIST_ICON } from "../utils/consonants";
import OrderCompleted from "./OrderCompleted";
import {
  BsFillStarFill,
  BsDashLg,
  BsPlusLg,
  BsFillLightningChargeFill,
  BsCircleFill,
  BsEmojiHeartEyesFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { TbLetterX } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCartHandlers from "../utils/useCartHandlers";
import LoginRegister from "./LoginRegister";

const Cart = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.frequencyTotal);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const [updateModal, setUpdateModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { handleIncreament, handleDecreament, handleClearCart } =
    useCartHandlers();

  const deliveryCharges = 69;

  useEffect(() => {
    if (!user) {
      setShowLogin(true);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <LoginRegister onClose={() => setShowLogin(false)} />
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex justify-center items-center text-xl font-semibold text-gray-700 dark:text-white">
          Please log in to access your cart.
        </div>
      </>
    );
  }

  return (
    <div className="px-4 py-8 min-h-screen bg-emerald-200 bg-opacity-90 dark:bg-slate-900 text-gray-800 dark:text-gray-200">
      {Object.keys(cartItems).length ? (
        <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-start">
          {/* 🛒 LEFT: Cart Items */}
          <div className="lg:w-7/12 w-full">
            <div className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 px-6 py-5 rounded-xl shadow-md mb-6 text-center border border-orange-200">
              The more, The better <span className="text-orange-400">•ᴗ•</span>
              <span className="block text-base font-semibold mt-2 text-orange-700 tracking-wide">
                ({totalItems} Items in your cart)
              </span>
            </div>

            {Object.entries(cartItems).map(([id, value]) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md transition hover:scale-[1.02] mb-5"
              >
                {/* 📝 Item Info */}
                <div className="w-full sm:w-7/12 text-left">
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">
                    {value.card.info.name}
                  </h2>
                  <div className="text-md mb-1 text-green-600 font-bold">
                    ₹{" "}
                    {value.card.info?.price
                      ? value.card.info.price / 100
                      : value.card.info.defaultPrice / 100}
                  </div>
                  {value.card.info?.ratings?.aggregatedRating?.rating ? (
                    <div className="flex items-center text-sm mt-1 text-yellow-500">
                      <BsFillStarFill className="mr-1" />
                      {value.card.info.ratings.aggregatedRating.rating} (
                      {value.card.info.ratings.aggregatedRating.ratingCount})
                    </div>
                  ) : (
                    <div className="text-gray-500 text-sm">(No Ratings)</div>
                  )}
                </div>

                {/* 📸 Image + Counter */}
                <div className="relative text-center w-full sm:w-4/12">
                  <img
                    src={PLAYLIST_ICON + value.card.info?.imageId}
                    alt="Unavailable"
                    className="w-32 h-32 mx-auto rounded-lg object-cover border"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-4 py-2 bg-black text-white font-semibold rounded-full shadow-md w-36">
                    <button
                      onClick={() => handleDecreament(value.card.info.id)}
                    >
                      <BsDashLg />
                    </button>
                    <span>
                      {cartItems[value.card.info.id]?.frequency || "ADD"}
                    </span>
                    <button
                      onClick={() =>
                        handleIncreament(value.card.info.id, value)
                      }
                    >
                      <BsPlusLg />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-4/12 w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center mb-4">
              <BsFillLightningChargeFill className="text-yellow-400 mr-2" />
              Let's Do It
            </h1>

            <h2 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Your Bag:
            </h2>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {Object.entries(cartItems).map(([id, value]) => (
                <div
                  key={id}
                  className="flex justify-between items-center py-2 text-sm"
                >
                  <div className="flex items-center gap-1">
                    <BsCircleFill
                      className={`${
                        value.card.info.itemAttribute.vegClassifier === "NONVEG"
                          ? "text-red-600"
                          : "text-green-600"
                      } text-xs`}
                    />
                    {value.card.info.name}
                    <TbLetterX />
                    {value.frequency}
                  </div>
                  <div>
                    ₹
                    {((value.card.info.price || value.card.info.defaultPrice) /
                      100) *
                      value.frequency}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-4 border-t pt-4 text-sm">
              <div className="flex justify-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-orange-500">+ ₹{deliveryCharges}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-green-700 dark:text-green-400 border-t pt-3 mt-3">
                <span>Total</span>
                <span>₹ {totalCost}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-6">
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                onClick={() => setUpdateModal(true)}
              >
                Order Now
              </button>
              {updateModal && (
                <OrderCompleted
                  onClose={() => {
                    setUpdateModal(false);
                    setTimeout(() => handleClearCart(), 0);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        // 🕳 Empty Cart
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full sm:w-10/12 md:w-6/12 bg-gray-100 dark:bg-slate-800 rounded-2xl shadow-xl p-10 text-center">
            <h1 className="text-3xl font-bold mb-4 flex justify-center items-center text-gray-800 dark:text-white">
              Empty Cart <BsFillArrowRightCircleFill className="mx-2" /> Empty
              Stomach
            </h1>
            <div className="text-xl font-semibold flex justify-center items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>Add Something</span>
              <BsEmojiHeartEyesFill className="bg-red-600 text-yellow-400 rounded-full p-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
