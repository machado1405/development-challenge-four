import React from "react";
import Titulo from "./Titulo/Titulo";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Head from "./Helpers/Head";

export default function Home() {
  return (
    <section className="container animeLeft separadorHome">
      <Head title="Home" />
      <Titulo texto="Bem vindo ao Medtest" />
      <p className={styles.texto}>
        Site desenvolvido como parte do processo seletivo da MedCloud
      </p>
      <p className={styles.texto}>
        Porque escolher a Medtest? Somos uma empresa dedicada em atender às
        demandas do mercado, trazendo inovações e tecnologias sempre
        atualizadas, utilizando tecnologias, tais como, React.js, MUI,
        JavaScript ES6+, HTML 5, CSS 3. Nossa equipe está comprometida a se
        aprimorar cada vez mais, melhorando o desempenho e se adequando as
        necessidades e expectativas do contratante.
      </p>
      <div className={styles.home}>
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/cadastro">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
