import React, { useRef } from "react";
import { TbLetterX } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { FaSmileWink } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const OrderCompleted = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 sm:px-0"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 text-center"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
          >
            <TbLetterX />
          </button>

          {/* Success Icon */}
          <BsCheck2Circle className="text-6xl text-green-500 mx-auto mb-4" />

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            Order Placed!
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
            Thank you for your order. We appreciate your business.
          </p>

          {/* Visit Again */}
          <div className="flex justify-center items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
            <span>Visit Again</span>
            <FaSmileWink className="text-orange-400" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OrderCompleted;
