import React from "react";
import styles from "./formulario.module.css";

export default function Formulario() {
  const [enviado, setEnviado] = React.useState(false);
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.tituloPrincipal}>
        Formulário Oficial de Admissão para Novos Membros
      </h1>
      <h2 className={styles.tituloSecundario}>
        Associação Brasileira dos Héteros Afeminados (ABHA)
      </h2>
      <div className={styles.preambulo}>
        <p>
          <b>Preâmbulo:</b>
          <br />
          Prezado aspirante, a ABHA é uma irmandade de elite que celebra a
          complexidade do homem moderno. Buscamos indivíduos de inquestionável
          heterossexualidade e impecável sensibilidade. Este formulário é o
          primeiro passo da sua jornada. Responda com a sinceridade de quem
          acabou de maratonar uma série de drama e com o bom gosto de quem sabe
          a diferença entre um Merlot e um Cabernet. Boa sorte.
        </p>
      </div>
      {enviado ? (
        <div className={styles.sucesso}>
          <p>Solicitação enviada com sucesso! Aguarde nosso contato.</p>
        </div>
      ) : (
        <form
          className={styles.form}
          action="https://formsubmit.co/abha.leandro@gmail.com"
          method="POST"
          onSubmit={() => setEnviado(true)}
        >
          <fieldset className={styles.secao}>
            <legend>Seção 1: Identificação Pessoal e Aptidões Básicas</legend>
            <label>
              Nome Completo:
              <input type="text" name="nome" required />
            </label>
            <label>
              E-mail para contato:
              <input type="email" name="email" required />
            </label>
            <label>Pronome de Tratamento Preferido:</label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="pronome" value="Senhor" required />{" "}
                Senhor
              </label>
              <label>
                <input type="radio" name="pronome" value="Querido" /> Querido
              </label>
              <label>
                <input type="radio" name="pronome" value="Meu Anjo" /> Meu Anjo
              </label>
              <label>
                <input
                  type="radio"
                  name="pronome"
                  value="O Rapaz do CPF na nota"
                />{" "}
                O Rapaz do CPF na nota
              </label>
            </div>
            <label>
              Qual o seu nível de conhecimento sobre a obra completa de Taylor
              Swift?
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="taylor" value="Básico" required />{" "}
                Básico (só os hits do rádio)
              </label>
              <label>
                <input type="radio" name="taylor" value="Intermediário" />{" "}
                Intermediário (sei qual álbum é sobre qual ex-namorado)
              </label>
              <label>
                <input type="radio" name="taylor" value="Avançado" /> Avançado
                (entendo todas as referências poéticas e easter eggs dos clipes)
              </label>
            </div>
            <label>
              Em uma escala de 1 a 5, qual a sua capacidade de disfarçar o choro
              no final de um filme da Pixar?
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="choro_pixar" value="1" required /> 1 -
                Sou uma rocha
              </label>
              <label>
                <input type="radio" name="choro_pixar" value="2" /> 2 - Só um
                leve brilho nos olhos, nada demais
              </label>
              <label>
                <input type="radio" name="choro_pixar" value="3" /> 3 - Engulo
                seco, mas mantenho a pose
              </label>
              <label>
                <input type="radio" name="choro_pixar" value="4" /> 4 - Preciso
                fingir que fui cortar cebola na cozinha
              </label>
              <label>
                <input type="radio" name="choro_pixar" value="5" /> 5 - "A
                poeira nos meus olhos" já não cola mais
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.secao}>
            <legend>Seção 2: Teste de Competências Comportamentais</legend>
            <label>
              Cenário: Você está em um churrasco de família. Seu tio faz uma
              piada sem graça e levemente ofensiva. Sua reação:
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="churrasco"
                  value="Risada forçada"
                  required
                />{" "}
                Dou uma risada forçada para não estragar o clima.
              </label>
              <label>
                <input type="radio" name="churrasco" value="Mudo de assunto" />{" "}
                Mudo de assunto rapidamente, oferecendo um pedaço de pão de
                alho.
              </label>
              <label>
                <input
                  type="radio"
                  name="churrasco"
                  value="Olhar de reprovação"
                />{" "}
                Lanço um olhar de reprovação sutil, mas elegante, enquanto
                ajusto a gola da minha camisa.
              </label>
            </div>
            <label>
              Qual das seguintes tarefas você considera mais desafiadora?
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="tarefa_dificil"
                  value="Resistência do chuveiro"
                  required
                />{" "}
                Trocar a resistência queimada do chuveiro.
              </label>
              <label>
                <input type="radio" name="tarefa_dificil" value="Samambaia" />{" "}
                Manter uma samambaia viva e feliz por mais de seis meses.
              </label>
              <label>
                <input
                  type="radio"
                  name="tarefa_dificil"
                  value="Tábua de frios"
                />{" "}
                Montar uma tábua de frios esteticamente agradável.
              </label>
            </div>
            <label>Marque as habilidades que você possui (seja honesto):</label>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  name="habilidades[]"
                  value="Times do Gauchão"
                />{" "}
                Sei identificar todos os times do Gauchão só pelo escudo.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="habilidades[]"
                  value="Sérum de ácido hialurônico"
                />{" "}
                Sei identificar o que é um sérum de ácido hialurônico e para que
                serve.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="habilidades[]"
                  value="Abrir palmito"
                />{" "}
                Consigo abrir um pote de palmito sem pedir ajuda.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="habilidades[]"
                  value="Opinião look"
                />{" "}
                Consigo dar uma opinião sincera (e gentil) sobre o look da minha
                parceira.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="habilidades[]"
                  value="Playlist sofrência"
                />{" "}
                Tenho uma playlist secreta intitulada "Sofrência Pop Anos 2000".
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.secao}>
            <legend>Seção 3: Prova Prática Situacional</legend>
            <label>
              Um amigo te convida para "tomar uma". Ao chegar no bar, ele pede
              uma cerveja e você está com vontade de tomar um Aperol Spritz.
              Você:
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="aperol"
                  value="Pede cerveja"
                  required
                />{" "}
                Pede a cerveja. Afinal, quem toma Aperol às seis da tarde?
              </label>
              <label>
                <input
                  type="radio"
                  name="aperol"
                  value="Pede Aperol com piada"
                />{" "}
                Pede o Aperol, mas faz uma piada sobre isso para quebrar o gelo.
              </label>
              <label>
                <input
                  type="radio"
                  name="aperol"
                  value="Pede Aperol naturalmente"
                />{" "}
                Pede o Aperol com a naturalidade de quem nasceu para isso e
                pergunta se ele não quer provar.
              </label>
            </div>
            <label>
              Descreva, em um parágrafo, a importância da paleta de cores de um
              ambiente para o seu bem-estar emocional:
              <textarea name="paleta_cores" rows={4} required />
            </label>
          </fieldset>

          <fieldset className={styles.secao}>
            <legend>Seção 4: Juramento e Termo de Compromisso</legend>
            <div className={styles.checkboxGroup}>
              <label>
                <input type="checkbox" name="juramento1" value="sim" required />{" "}
                ...nunca julgar um amigo que pede a carne "bem passada", embora
                isso lhe cause dor física e espiritual;
              </label>
              <label>
                <input type="checkbox" name="juramento2" value="sim" required />{" "}
                ...oferecer-se para tirar a foto do grupo, pois sabe enquadrar
                melhor que os outros;
              </label>
              <label>
                <input type="checkbox" name="juramento3" value="sim" required />{" "}
                ...e, acima de tudo, entender que a verdadeira força não está em
                abrir um pote de azeitonas, mas em admitir que você prefere um
                bom Pinot Noir.
              </label>
            </div>
            <label>
              Assinatura do Candidato:
              <input type="text" name="assinatura" required />
            </label>
          </fieldset>

          <input
            type="hidden"
            name="_subject"
            value="Solicitação de entrada na ABHA"
          />
          <input type="hidden" name="_next" value="/obrigado.html" />
          <button type="submit" className={styles.enviarBtn}>
            Enviar solicitação
          </button>
        </form>
      )}
    </div>
  );
}
