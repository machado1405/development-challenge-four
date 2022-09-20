import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Titulo from "../Titulo/Titulo";
import styles from "./Entrar.module.css";
import { Link } from "react-router-dom";
import Error from "../Helpers/Error";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

export default function Entrar() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={`${styles.section} animeLeft container mainContainer`}>
      <Titulo texto="Login" />
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <div className={styles.btnCentralizar}>
          {loading ? (
            <Button disabled>Entrando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
        </div>
      </form>
      <Link className={styles.perdeu} to="/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.section}>
        <Titulo texto="Não possui cadastro?" />
        <Link className={styles.perdeu} to="/cadastro">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
