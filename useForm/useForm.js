import { useEffect, useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value, //Aqui estaba un poco confundido con esto, asi que a mi yo del futuro, te explico, en [ targe.name ] estan los nombres de los inputs en los que escribe, es decir, no hay un solo name si no el de todos, por que ejecutamos la misma funcion para ambos inputs, en cuanto al value funcion igual, ahi estara el valor de el input en el que ocurrio el cambio
    });
  };

  return [values, handleInputChange, reset];
};
