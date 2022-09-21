import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import { PASSWORD_LOST } from "../../Api";
import Titulo from "../Titulo/Titulo";
// import Head from "../Helper/Head";

export default function PerdeuSenha() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    const resetar = window.location.href.replace("perdeu", "resetar");
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: resetar,
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft container mainContainer section">
      {/* <Head title="Resete sua senha" /> */}
      <Titulo texto="Recuperar senha" />
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <div className="section">
              <Button disabled>Enviando...</Button>
            </div>
          ) : (
            <div className="section">
              <Button disabled>Enviar e-mail</Button>
            </div>
          )}
          <Error error={error} />
        </form>
      )}
      <Error error={error} />
    </section>
  );
}
