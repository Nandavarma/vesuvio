import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/Redux utils/authSlice";
import { Loader2 } from "lucide-react"; // Make sure lucide-react is installed

const LoginRegister = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let response;
    if (isLogin) {
      response = await supabase.auth.signInWithPassword({ email, password });
    } else {
      response = await supabase.auth.signUp({ email, password });
    }

    const { data, error } = response;
    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      dispatch(setUser(data.user || data.session?.user));
      onClose();
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 w-[90%] max-w-md p-8 rounded-2xl shadow-2xl transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600 dark:text-emerald-400">
          {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
          />

          {errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg shadow-md transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : isLogin ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleMode}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-red-500 hover:underline mt-2 text-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginRegister;
