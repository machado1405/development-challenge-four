import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import Titulo from "../Titulo/Titulo";
import Error from "../Helpers/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { USER_POST } from "../../Api";
import { UserContext } from "../../UserContext";
import Head from "../Helpers/Head";

export default function Cadastro() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handlesubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft container mainContainer section">
      <Head title="Cadastro" />
      <Titulo texto="Cadastre-se" />
      <form onSubmit={handlesubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Error error={error} />
        <div className="btnCentralizar">
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
        </div>
      </form>
    </section>
  );
}
