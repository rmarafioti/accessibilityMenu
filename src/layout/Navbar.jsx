import { IoAccessibility } from "react-icons/io5";
import styles from "../layout/navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <p>This is my Navbar</p>
      <IoAccessibility className={styles.accessIcon} />
    </nav>
  );
}
