/*import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";*/
import "./index.css";
import Root from "./Root.jsx";
import Home from "./Home.jsx";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";

/*function Main() {
  const [accessibility, setAccessibility] = useState({
    isThemeDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    isImagesHidden: false,
    isImagesGreyScale: false,
    isRemoveFontStyle: false,
    isDyslexicFont: false,
    isCursorLarge: false,
    fontSizeAdjust: 1,
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      accessibility.isThemeDark ? "dark" : "light"
    );
  }, [accessibility.isThemeDark]);

  useEffect(() => {
    document.body.classList.toggle("large-cursor", accessibility.isCursorLarge);
  }, [accessibility.isCursorLarge]);

  const adjustFontSize = (increment) => {
    setAccessibility((prev) => ({
      ...prev,
      fontSizeAdjust: Math.max(1, prev.fontSizeAdjust + increment),
    }));
  };

  const toggleSetting = (key) => {
    setAccessibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAccessibility = () => {
    setAccessibility({
      isThemeDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
      isImagesHidden: false,
      isImagesGreyScale: false,
      isRemoveFontStyle: false,
      isDyslexicFont: false,
      isCursorLarge: false,
      fontSizeAdjust: 1,
    });
  };

  /*return (
    <StrictMode>
      <Navbar
        accessibility={accessibility}
        adjustFontSize={adjustFontSize}
        toggleSetting={toggleSetting}
        resetAccessibility={resetAccessibility}
      />
      <App accessibility={accessibility} />
      <Footer />
    </StrictMode>
  );
}*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
