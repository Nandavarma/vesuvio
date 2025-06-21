import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { darkModeContext } from "../utils/darkModeContext";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsCartDashFill,
} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { supabase } from "../../supabaseClient";
import { logoutUser } from "../utils/Redux utils/authSlice";
import LoginRegister from "./LoginRegister";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  const cartWeight = useSelector((state) => state.cart.frequencyTotal);
  const user = useSelector((state) => state.auth.user);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();

  const switchMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLogin = () => setShowLoginModal(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logoutUser());
  };

  return (
    <header className="w-full px-4 py-2 sm:py-3 flex justify-between items-center bg-transparent dark:bg-slate-700 dark:text-gray-200 shadow-md relative">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl sm:text-4xl font-extrabold tracking-wider ml-1 sm:ml-5"
      >
        VESUVIO
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 text-sm sm:text-md font-semibold">
        {/* Cart */}
        <Link to="/cart" className="relative hover:text-orange-500 transition">
          <BsCartDashFill className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartWeight}
          </span>
        </Link>

        {/* Auth */}
        {user ? (
          <button
            className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md border border-gray-500 hover:bg-slate-800 hover:text-white transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md border border-gray-500 hover:bg-slate-800 hover:text-white transition"
            onClick={handleLogin}
          >
            Login
          </button>
        )}

        {/* Theme Toggle */}
        <button
          onClick={switchMode}
          className="text-lg sm:text-xl p-1 sm:p-2 rounded-full bg-gray-500 hover:scale-110 transition"
        >
          {darkMode ? (
            <BsFillMoonStarsFill className="text-slate-800" />
          ) : (
            <BsFillSunFill className="text-white" />
          )}
        </button>

        {/* Online Status */}
        <span
          className={`hidden sm:block ${
            onlineStatus ? "text-green-600" : "text-red-600"
          }`}
        >
          {onlineStatus ? "Online" : "Offline"}
        </span>

        {/* Menu */}
        <button
          onClick={toggleSidebar}
          className="text-2xl sm:text-3xl text-emerald-600 hover:text-emerald-800"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Sidebar + Modal */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
        cartWeight={cartWeight}
      />
      {showLoginModal && (
        <LoginRegister onClose={() => setShowLoginModal(false)} />
      )}
    </header>
  );
};

export default Header;
