import React from "react";
import styles from "./Titulo.module.css";

export default function Titulo({ texto }) {
  return <h2 className={styles.titulo}>{texto}</h2>;
}
