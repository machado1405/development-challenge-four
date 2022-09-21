import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import { PASSWORD_RESET } from "../../Api";
import { useNavigate } from "react-router-dom";
import Titulo from "../Titulo/Titulo";

export default function AlterarSenha() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section className="animeLeft container mainContainer section">
      {/* <Head title="Resete sua senha" /> */}
      <Titulo texto="Altere sua senha" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <div className="section">
            <Button disabled>Resetando...</Button>
          </div>
        ) : (
          <div className="section">
            <Button disabled>Resetar</Button>
          </div>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}
