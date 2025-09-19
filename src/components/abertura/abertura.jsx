import React, { useEffect, useState } from "react";
import styles from "./abertura.module.css";

export default function Abertura({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2000); // duração total da animação
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hide && onFinish) {
      // Aguarda o fade-out antes de remover
      const timer = setTimeout(onFinish, 600);
      return () => clearTimeout(timer);
    }
  }, [hide, onFinish]);

  return (
    <div className={styles.abertura + (hide ? " " + styles.hide : "")}>
      <img
        src="/image/logo.png"
        alt="Logo ABHA"
        className={styles.logo}
        draggable={false}
      />
    </div>
  );
}
