// import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { useFetch } from './hooks';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// User ejemplo
// const userUrl = 'https://jsonplaceholder.typicode.com/users/1';

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {

  //useEffect comunicarnos con un endpoint  - entidad externa del componente
  //maneja el ciclo de vida de un componente
  //operación async
  //parámetros de entrada
  //context
  //se puede usar las veces que se requieran

  //sync con entidades externas
  // useEffect(() => {
  //   //¿cuándo sucede?
  //   // 1 - cuando el componente se monta
  //   // 2 - cada que se modifica cualquiera de los valores del state

  //   fetchData()

  //   // return () => {
  //   //   //maneja el estado de la memoria - se ejecuta cuando se destruye el componente o cuando se desmonta
  //   // }
  // }, [fetchData])

  const { data, error, loading } = useFetch<Data>(url)

  //de user ejemplo
  // const { data: dataUser, error: errorUser, loading: loadingUser } = useFetch<{name: string}>(url)
  // dataUser?.name

  if (loading) {
    return <div>Cargando ....</div>
  }

  if (error) {
    return <div>Upps hay un error!{error.message}</div>
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App