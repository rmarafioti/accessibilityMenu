import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "../components/toggle.module.css";

export default function Toggle() {
  const [theme, setTheme] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialTheme = "light";

      // Set the initial theme
      setTheme(initialTheme);
      document.body.classList.add(`${initialTheme}-mode`);
    }

    // Handle screen resizing for mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update the body class whenever the theme changes
  useEffect(() => {
    if (theme) {
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(`${theme}-mode`);
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the state

    // Save the user's manual theme preference
    localStorage.setItem("theme", newTheme);
  };

  // Prevent rendering the toggle until the theme is determined
  if (!theme) return null;
  return (
    <section className={styles.toggleSection}>
      <div
        className={styles.toggleConatiner}
        onClick={toggleTheme}
        role="button"
      >
        <p
          className={styles.toggleButton}
          style={{
            left: isMobile
              ? theme === "light"
                ? "2px"
                : "calc(100% - 24px)"
              : theme === "light"
              ? "4px"
              : "calc(100% - 24px)",
          }}
        ></p>
      </div>
    </section>
  );
}
