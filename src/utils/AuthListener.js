import { useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useDispatch } from "react-redux";
import { setUser, logoutUser } from "./Redux utils/authSlice";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session?.user) {
        dispatch(setUser(data.session.user));
      }
    };

    restoreSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          dispatch(setUser(session.user));
        } else {
          dispatch(logoutUser());
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return null;
};

export default AuthListener;
