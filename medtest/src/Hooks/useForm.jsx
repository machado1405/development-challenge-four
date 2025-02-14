import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/,
    message:
      "Precisa conter um caracter maiúsculo, um minúsculo, um dígito e um caracter especial",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números",
  },
  cep: {
    regex: /^[0-9]{5}-[0-9]{3}$/,
    message: "Formato inválido",
  },
  nascimento: {
    regex: /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/,
    message: "Insira uma data válida",
  },
};

function useForm(type) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return false;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
