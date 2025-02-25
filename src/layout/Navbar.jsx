import { useState } from "react";
import { IoAccessibility } from "react-icons/io5";
import styles from "../layout/navbar.module.css";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <nav>
        <p>This is my Navbar</p>
        <IoAccessibility
          className={styles.accessIcon}
          onClick={() => setIsMenuVisible(true)}
        />
      </nav>

      {isMenuVisible && (
        <menu className={styles.accessMenu}>
          <div>
            <p>Accessibility Menu</p>
            <ul>
              <li>theme</li>
              <li>cursor resizing</li>
              <li>cursor highlighting</li>
              <li>font size</li>
              <li>font style</li>
              <li>hide images</li>
              <li>remove color</li>
              <li>scroll to content</li>
              <li>reset</li>
            </ul>
          </div>
          <button onClick={() => setIsMenuVisible(false)}>Close</button>
        </menu>
      )}
    </>
  );
}
