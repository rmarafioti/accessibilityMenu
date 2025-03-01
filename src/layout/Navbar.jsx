import { useState } from "react";
import { IoAccessibility } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Toggle from "../components/Toggle";
import styles from "../layout/navbar.module.css";

export default function Navbar({
  accessibility,
  adjustFontSize,
  toggleSetting,
  resetAccessibility,
}) {
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
                <Toggle
                  onToggle={() => toggleSetting("isThemeDark")}
                  isToggled={accessibility.isThemeDark}
                />
              </p>
            </div>
            {/*<div className={styles.controlSection}>
              <p className={styles.controlItem}>Cursor Highlighting</p>
              <p className={styles.controlItem}>
                <Toggle />
              </p>
            </div>*/}
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Font Style</p>
              <p className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isRemoveFontStyle")}
                  isToggled={accessibility.isRemoveFontStyle}
                />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Add Dyslexic Font</p>
              <p className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isDyslexicFont")}
                  isToggled={accessibility.isDyslexicFont}
                />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Image Color</p>
              <p className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isImagesGreyScale")}
                  isToggled={accessibility.isImagesGreyScale}
                />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Hide Images</p>
              <p className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isImagesHidden")}
                  isToggled={accessibility.isImagesHidden}
                />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Cursor Size</p>
              <p className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isCursorLarge")}
                  isToggled={accessibility.isCursorLarge}
                />
              </p>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Font Size</p>
              <div className={styles.resizingContainer}>
                <FaMinus
                  className={styles.sizeItem}
                  onClick={() => adjustFontSize(-0.1)}
                />
                <FaPlus
                  className={styles.sizeItem}
                  onClick={() => {
                    adjustFontSize(0.1);
                  }}
                />
              </div>
            </div>
          </section>
          <button className={styles.resetButton} onClick={resetAccessibility}>
            Reset
          </button>
        </menu>
      )}
    </>
  );
}
