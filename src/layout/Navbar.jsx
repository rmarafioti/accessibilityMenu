import { useState } from "react";
import { IoAccessibility } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Toggle from "../components/Toggle";
import styles from "../layout/navbar.module.css";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <nav>
        <p>This is my Navbar</p>
        <IoAccessibility
          className={styles.accessIcon}
          role="button"
          onClick={() => setIsMenuVisible(true)}
        />
      </nav>

      {isMenuVisible && (
        <menu className={styles.accessMenu}>
          <div className={styles.headerSection}>
            <p className={styles.menuHeader}>Accessibility Menu</p>
            <button
              className={styles.closeButton}
              onClick={() => setIsMenuVisible(false)}
            >
              Close
            </button>
          </div>
          <section className={styles.controls}>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Theme</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Cursor Highlighting</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Font Style</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Dyslexic Font</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Hide Images</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Color</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Scroll to Content</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Cursor Size</p>
              <div className={styles.resizingContainer}>
                <FaMinus className={styles.sizeItem} />
                <FaPlus className={styles.sizeItem} />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Font Size</p>
              <div className={styles.resizingContainer}>
                <FaMinus className={styles.sizeItem} />
                <FaPlus className={styles.sizeItem} />
              </div>
            </div>
          </section>
          <button className={styles.resetButton}>Reset</button>
        </menu>
      )}
    </>
  );
}
