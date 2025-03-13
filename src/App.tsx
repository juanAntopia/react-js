import { useState, useEffect, useCallback } from 'react'
import './App.css'
// import { Button } from './components'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = useCallback(
    (loadingValue: boolean) => {
      setLoading(loadingValue)
      console.info(loading)
    },
    [loading]
  )

  //useEffect comunicarnos con un endpoint  - entidad externa del componente
  //maneja el ciclo de vida de un componente
  //operación async
  //parámetros de entrada
  //context
  //se puede usar las veces que se requieran
  const fetchData = useCallback(
    async () => {
      consoleLoader(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        if (!response.ok) {
          throw new Error("Error al obtener los datos!")
        }

        const responseJson = await response.json()
        setData(responseJson)
      }
      catch (err) {
        setError(err as string)
      }
      finally {
        consoleLoader(false)
      }
    }, 
    [consoleLoader]
  )

  //sync con entidades externas
  useEffect(() => {
    //¿cuándo sucede?
    // 1 - cuando el componente se monta
    // 2 - cada que se modifica cualquiera de los valores del state

    fetchData()

    // return () => {
    //   //maneja el estado de la memoria - se ejecuta cuando se destruye el componente o cuando se desmonta
    // }
  }, [fetchData])

  if (loading) {
    return <div>Cargando ....</div>
  }

  if (error) {
    return <div>Upps hay un error!</div>
  }

  return (
    <>
      {/* <Button label={`Count is ${count}`} parentMethod={countMore} /> */}
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App
