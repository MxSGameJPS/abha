import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} ABHA — Associação Brasileira dos Héteros
        Afeminados. Feito com ♥ por Saulo Pavanello.
      </span>
    </footer>
  );
}
