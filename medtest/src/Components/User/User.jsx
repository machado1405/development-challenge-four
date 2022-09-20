import React from "react";
import Titulo from "../Titulo/Titulo";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import styles from "./User.module.css";
import Button from "../Form/Button";

export default function User() {
  const cep = useForm();
  const bairro = useForm();
  const complemento = useForm("email");
  const cidade = useForm();
  const endereco = useForm();
  const pais = useForm();
  const nascimento = useForm();
  const numero = useForm();
  const [ativo, setAtivo] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setAtivo(!ativo);
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    const json = await response.json();
  }

  return (
    <section className={`${styles.section} container mainContainer animeLeft`}>
      <Titulo texto="Finalize seu cadastro" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Data de nascimento"
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
        {ativo ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
    </section>
  );
}
