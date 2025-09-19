import React from "react";
import styles from "./videos.module.css";

const tiktokVideos = [
  "7550805815461022982",
  "7550000917769243909",
  "7547834659401370936",
  "7546732030415998214",
  "7545192798677437701",
  "7544865494856142136",
  "7543393877743471928",
  "7528112914335550776",
  "7518937271559589125",
  "7517792697919327544",
  "7479580796446051590",
  "7472471200690736439",
];

const tiktokProfile = "https://www.tiktok.com/@leandro.leitte";

export default function Videos() {
  return (
    <div className={styles.videosPage}>
      <h1 className={styles.titulo}>Vídeos do TikTok</h1>
      <div className={styles.grid}>
        {tiktokVideos.map((id) => (
          <div className={styles.videoCard} key={id}>
            <iframe
              src={`https://www.tiktok.com/embed/v2/${id}`}
              title={`TikTok ${id}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              className={styles.tiktokFrame}
            ></iframe>
          </div>
        ))}
      </div>
      <div className={styles.maisCard}>
        <h2>Assista mais no TikTok</h2>
        <a
          href={tiktokProfile}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.maisBtn}
        >
          Ver perfil completo
        </a>
      </div>
    </div>
  );
}
