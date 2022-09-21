import React from "react";
import Titulo from "../Titulo/Titulo";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Head from "../Helpers/Head";

export default function User() {
  const nascimento = useForm("nascimento");
  const cep = useForm("cep");
  const bairro = useForm();
  const complemento = useForm();
  const cidade = useForm();
  const endereco = useForm();
  const pais = useForm();
  const numero = useForm("number");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nascimento);
  }

  return (
    <section className="container mainContainer animeLeft section">
      <Head title="Conta" />
      <Titulo texto="Finalize seu cadastro" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Data de nascimento __/__/____"
          type="text"
          name="nascimento"
          {...nascimento}
        />
        <Input label="CEP" type="text" name="cep" {...cep} />
        <Input label="Endereço" type="text" name="endereco" {...endereco} />
        <Input label="Bairro" type="text" name="bairro" {...bairro} />
        <Input label="Número" type="text" name="numero" {...numero} />
        <Input
          label="Complemento"
          type="text"
          name="complemento"
          {...complemento}
        />
        <Input label="Cidade" type="text" name="cidade" {...cidade} />
        <Input label="País" type="text" name="pais" {...pais} />
        <div className="btnCentralizar">
          <Button>Enviar</Button>
        </div>
      </form>
    </section>
  );
}
