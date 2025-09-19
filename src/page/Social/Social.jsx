import React from "react";
import styles from "./social.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/heteros.afeminados",
    label: "@heteros.afeminados",
    icon: <FaInstagram />,
    color: "#E1306C",
  },
  {
    href: "https://www.instagram.com/leandro.leitte",
    label: "@leandro.leitte",
    icon: <FaInstagram />,
    color: "#E1306C",
  },
  {
    href: "https://www.tiktok.com/@leandro.leitte",
    label: "@leandro.leitte",
    icon: <FaTiktok />,
    color: "#000",
  },
];

export default function Social() {
  return (
    <section className={styles.socialSection}>
      <img src={"/image/abha.png"} alt="ABHA" className={styles.abhaImg} />
      <h1 className={styles.titulo}>Redes Sociais</h1>
      <div className={styles.linksGrid}>
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            style={{ "--icon-color": link.color }}
          >
            <span className={styles.icon}>{link.icon}</span>
            <span className={styles.label}>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
