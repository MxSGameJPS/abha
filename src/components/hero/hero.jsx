import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.logoArea}>
          <img
            src="/image/logo.png"
            alt="Logo ABHA"
            className={styles.logoImg}
          />
        </div>
        <div className={styles.textArea}>
          <h1>Bem-vindo à ABHA!</h1>
          <p className={styles.description}>
            A Associação Brasileira dos Héteros Afeminados é o lugar onde o
            salto alto é opcional, mas o bom humor é obrigatório!
            <br />
            Aqui, celebramos a liberdade de ser quem você é, sem rótulos, sem
            julgamentos e com muito deboche.
            <br />
            Junte-se a nós e descubra que masculinidade e afetação podem (e
            devem!) andar de mãos dadas. 🦩🍷
          </p>
        </div>
      </div>
    </section>
  );
}
