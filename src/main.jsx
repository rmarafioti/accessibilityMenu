import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./layout/Navbar.jsx";
import App from "./App.jsx";
import Footer from "./layout/Footer.jsx";

function Main() {
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

  return (
    <StrictMode>
      <Navbar
        accessibility={accessibility}
        adjustFontSize={adjustFontSize}
        toggleSetting={toggleSetting}
      />
      <App accessibility={accessibility} />
      <Footer />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
