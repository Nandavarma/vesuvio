// components/Sidebar.jsx
import { Link } from "react-router-dom";
import { BsCartDashFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Sidebar = ({ isOpen, onClose, cartWeight }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-emerald-100 dark:bg-emerald-900 dark:text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-emerald-200 dark:border-emerald-800">
        <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-100">
          Menu
        </h2>
        <button onClick={onClose}>
          <MdClose className="text-2xl text-emerald-800 dark:text-white" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 p-4 text-emerald-900 dark:text-white font-semibold">
        <Link to="/" onClick={onClose} className="hover:text-emerald-600">
          Home
        </Link>
        <Link to="/about" onClick={onClose} className="hover:text-emerald-600">
          About
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="hover:text-emerald-600"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          onClick={onClose}
          className="flex items-center gap-2 hover:text-emerald-600"
        >
          <BsCartDashFill className="text-xl" />
          Cart ({cartWeight})
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
