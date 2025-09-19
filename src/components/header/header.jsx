import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        ABHA
      </Link>
      <nav className={styles.nav}>
        <Link to="/social" className={styles.navButton}>
          Social
        </Link>
        <Link to="/videos" className={styles.navButton}>
          Vídeos
        </Link>
      </nav>
    </header>
  );
}
