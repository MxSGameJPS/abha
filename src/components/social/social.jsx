import React from "react";
import styles from "./social.module.css";

export default function Social() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.container}>
        <div className={styles.imgArea}>
          <img
            src="/image/blusaPreta.png"
            alt="Leandro Leitte com blusa preta"
            className={styles.socialImg}
          />
        </div>
        <div className={styles.linksArea}>
          <h2>Redes Sociais</h2>
          <a
            href="https://www.instagram.com/leandro.leitte"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@leandro.leitte"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
