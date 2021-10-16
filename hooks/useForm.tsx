// React
import { useState } from "react";

export const useForm = (callback: any, initialState = {}) => {
  // useState para almacenar los datos del formulario
  const [values, setValues]: any = useState(initialState);

  // onChange event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // onSubmit event, regresa un callback de manera asincrona
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };

  // Devolver eventos y valores del formulario
  return {
    onChange,
    onSubmit,
    values,
  };
};
