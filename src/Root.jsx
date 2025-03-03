import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import AccessMenu from "./components/AccessMenu.jsx";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";

import "./styles/globalmenucontrols.css";

export default function Root() {
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

  return (
    <>
      <AccessMenu
        accessibility={accessibility}
        toggleSetting={toggleSetting}
        adjustFontSize={adjustFontSize}
        resetAccessibility={resetAccessibility}
      />
      <article
        className={`appContainer
            ${accessibility.isImagesHidden ? "hide-images" : ""}
        ${accessibility.isImagesGreyScale ? "grey-images" : ""}
        ${accessibility.isRemoveFontStyle ? "accessible-font" : ""}
        ${accessibility.isDyslexicFont ? "dyslexic-font" : ""}
        `}
        style={{
          fontSize: `${1 * accessibility.fontSizeAdjust}rem`,
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </article>
    </>
  );
}
