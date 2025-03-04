import { Link } from "react-router";
import styles from "./styles/home.module.css";

export default function TestPage() {
  return (
    <>
      <h1 className="header" id={styles.header}>
        This is a Test Page
      </h1>
      <img
        src="https://fastly.picsum.photos/id/905/700/300.jpg?hmac=9YxDbhi3xJInltQW_hUvE6uJcoen3EG0ngPWp_pa4xo"
        alt="A breathtaking snow-covered mountain landscape with jagged peaks rising against a clear blue sky. The slopes are blanketed in white, with dark rocky outcrops visible beneath the snow. In the foreground, a partially frozen glacial lake reflects the surrounding peaks, adding to the serene and majestic atmosphere."
      />
      <h2 className="subHeaders" id={styles.subHeaders}>
        Header Two
      </h2>
      <p>
        This page is to check if accessibility controls work on another path of
        a single page application. Refer to the router on main.jsx to see how to
        create multiple views for your single page application.
      </p>
      <img
        src="https://fastly.picsum.photos/id/143/700/300.jpg?hmac=H8Y4LkdS-9uTri7NKfh2yL_f1Vc1FnBUp52Mj2la6_U"
        alt="A weathered wooden deck scattered with small green and orange leaves. The aged planks have visible cracks and grain patterns, adding texture. The fallen leaves are randomly dispersed, creating a natural, organic pattern on the worn surface."
      />
      <h3 className="subHeaders" id={styles.subHeaders}>
        Header Three
      </h3>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia urna sem
        metus habitasse tempus tempus dolor ut. Maecenas platea aenean porta
        fringilla vivamus ante bibendum ultricies. Ultricies dictum rutrum urna
        congue aliquam; fusce purus. Mattis eu curabitur ornare lacinia habitant
        platea? Dictum tincidunt quam nostra a iaculis ante penatibus fermentum.
        Euismod metus accumsan venenatis tempor mus ut habitant. Proin curae mi
        porta interdum penatibus ridiculus tincidunt ligula id.
      </p>
      <Link to="/">Back to Home Page</Link>
    </>
  );
}
