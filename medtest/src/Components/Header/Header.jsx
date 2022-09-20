import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Logo from "../../Assets/logo.png";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Medtest - Home">
          <img src={Logo} alt="" />
        </Link>
        {data ? (
          <div className={styles.conta}>
            <Link to="/conta">
              {data.nome}
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
            </Link>
            <Link onClick={userLogout}>
              <Avatar sx={{ m: 1, bgcolor: "primary.main", cursor: "pointer" }}>
                <LogoutIcon />
              </Avatar>
              <span>Sair</span>
            </Link>
          </div>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
}
