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
    <header className="w-full px-4 py-3 flex justify-between items-center bg-transparent dark:bg-slate-700 dark:text-gray-200 shadow-md relative">
      <Link
        to="/"
        className="text-4xl font-extrabold tracking-wider ml-2 sm:ml-5"
      >
        VESUVIO
      </Link>

      <div className="flex items-center gap-4 sm:gap-6 text-md font-semibold">
        {/* Cart Icon */}
        <Link to="/cart" className="relative hover:text-orange-500 transition">
          <BsCartDashFill className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartWeight}
          </span>
        </Link>

        {/* Login / Logout */}
        {user ? (
          <button
            className="px-3 py-1 rounded-md border border-gray-500 hover:bg-slate-800 hover:text-white transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-3 py-1 rounded-md border border-gray-500 hover:bg-slate-800 hover:text-white transition"
            onClick={handleLogin}
          >
            Login
          </button>
        )}

        {/* Theme Switch */}
        <button
          onClick={switchMode}
          className="hidden sm:inline-block text-xl p-2 rounded-full bg-gray-500 hover:scale-110 transition"
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

        {/* Sidebar Menu Button */}
        <button
          onClick={toggleSidebar}
          className="text-3xl text-emerald-600 hover:text-emerald-800"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
        cartWeight={cartWeight}
      />

      {/* Login/Register Modal */}
      {showLoginModal && (
        <LoginRegister onClose={() => setShowLoginModal(false)} />
      )}
    </header>
  );
};

export default Header;
