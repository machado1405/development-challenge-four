import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext, UserStorage } from "../../UserContext";
import Logo from "../../Assets/logo.png";

export default function Header() {
  // const { data } = React.useContext(UserStorage);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Medtest - Home">
          <img src={Logo} alt="" />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Cadastrar
        </Link>
      </nav>
    </header>
  );
}
