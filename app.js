import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Mainbody from "./src/Components/Mainbody";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Cart from "./src/Components/Cart";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";

import { darkModeContext } from "./src/utils/darkModeContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./src/utils/Redux utils/appStore";
import ProtectedRoute from "./src/utils/ProtectedRoute";
import AuthListener from "./src/utils/AuthListener";

const Applayout = () => {
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(getSystemTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Provider store={appStore}>
      <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <AuthListener />
        <Header />
        <Outlet />
      </darkModeContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Mainbody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("main-container"));
root.render(
  <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
);
