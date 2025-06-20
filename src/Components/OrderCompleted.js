import React, { useRef } from "react";
import { TbLetterX } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { FaSmileWink } from "react-icons/fa";
const OrderCompleted = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-black flex flex-col justify-center items-center"
    >
      <div className="flex flex-col">
        <button
          className="place-self-end text-2xl mx-3 my-2 font-extrabold"
          onClick={onClose}
        >
          <TbLetterX />
        </button>

        <div className="bg-gray-200 px-20 py-10 flex flex-col justify-center items-center">
          <BsCheck2Circle className="text-6xl  text-green-500" />
          <h1 className="text-3xl font-extrabold text-green-500">
            Order Placed
          </h1>
          <div className="flex py-2">
            <h1 className="text-2xl font-bold px-2">Visit Again </h1>
            <FaSmileWink className="text-3xl text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
