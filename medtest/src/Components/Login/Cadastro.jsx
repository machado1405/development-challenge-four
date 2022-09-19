import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";

export default function Cadastro() {
  return (
    <section className="animeLeft container">
      <h1>Cadastre-se</h1>
      <form>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}
