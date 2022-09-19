import React from "react";
import Titulo from "../Titulo/Titulo";
import styles from "./Entrar.module.css";

export default function Entrar() {
  return (
    <section className="animeLeft container mainContainer">
      <Titulo texto="Login" />
      <form className={styles.form}></form>
    </section>
  );
}
