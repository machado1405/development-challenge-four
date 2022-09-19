import React from "react";
import Intro from "./Intro/Intro";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className="container animeLeft separadorHome">
      <Intro />
      <p className={styles.texto}>
        Site desenvolvido como parte do processo seletivo da MedCloud
      </p>
      <div className={styles.home}>
        <Link className={styles.btn} to="/login">
          Login
        </Link>
        <Link className={styles.btn} to="/cadastro">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
