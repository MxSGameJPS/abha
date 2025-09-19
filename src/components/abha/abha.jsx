import React from "react";
import styles from "./abha.module.css";
import FallingLeaves from "./FallingLeaves";

export default function Abha() {
  return (
    <section className={styles.abhaSection}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/image/abha.png"
          alt="Colagem ABHA Leandro Leitte"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </div>
        <FallingLeaves leafCount={50} />
      <div className={styles.textBox}>
        <h2>Leandro Leitte e a Arte de Fabricar Alegria</h2>
        <p>
          Em um feed infinito de dancinhas e tendências passageiras, há vozes
          que se destacam não por seguirem a maré, mas por criarem suas próprias
          correntes. Leandro Leitte é uma dessas vozes. Autodenominado "Um
          Brincante", ele fez das redes sociais o seu palco, mas o que ele
          entrega vai muito além do humor; é um exercício diário de carisma,
          inteligência e, acima de tudo, alegria.
        </p>
        <p>
          A jornada de um criador de conteúdo original é pavimentada pela
          determinação. É a aposta corajosa em uma ideia que ninguém mais teve,
          a disciplina de aparecer todos os dias e a resiliência para refinar
          uma piada até que ela se torne genial. A leveza que Leandro
          transparece em seus vídeos é o resultado desse trabalho sério nos
          bastidores. Ele não tropeçou no sucesso; ele o construiu, vídeo a
          vídeo, com a convicção de quem sabe que o humor mais potente é aquele
          que nasce de uma observação autêntica sobre o mundo.
        </p>
        <p>
          E é aí que entra o seu carisma contagiante. Não se trata de um humor
          que aponta e ri do outro, mas que nos convida a rir de nós mesmos. Com
          a criação da "ABHA", ele não apenas criou um quadro de comédia, mas um
          espelho bem-humorado para a sociedade. Ele encontrou uma forma genial
          de explorar as complexidades e absurdos do comportamento humano,
          transformando o desconforto em gargalhada e a crítica social em
          entretenimento de primeira.
        </p>
        <p>
          O resultado final de toda essa mistura é o que realmente importa: a
          alegria genuína que ele proporciona a quem o assiste. Um vídeo do
          Leandro Leitte no meio de um dia caótico é como encontrar um amigo
          espirituoso que sabe exatamente o que dizer para arrancar um sorriso
          seu. É uma pausa na seriedade, um antídoto contra o mau humor e um
          lembrete de que rir é, e sempre será, um ato de resistência.
        </p>
        <p>
          Leandro Leitte prova que o conteúdo mais valioso não é o que gera mais
          números, mas o que provoca as melhores sensações. Com sua determinação
          inabalável e um carisma que transborda da tela, ele não se tornou
          apenas um comediante, mas um verdadeiro fabricante de bons momentos. E
          em um mundo que precisa desesperadamente de mais leveza, isso não é
          apenas talento, é um presente.
        </p>
      </div>
    </section>
  );
}
