import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  const estaMontado = useRef(true); /* El useRef() lo usamos para vitar el error que nos muestra
  cuando renderizamos un componente y lo ocultamos varias veces.
  Para eso creamos e importamos esta funcion y la usamos dentro de un useEffect(), luego usamos un if(){}
   */

  useEffect(() => {
    return () => {
      estaMontado.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setTimeout(() => {
        if (estaMontado.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log('setState no se llamo');
        }
        // }, 100);
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [url]);

  return state;
};
