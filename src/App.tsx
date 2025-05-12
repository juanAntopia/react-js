// import { useEffect, useState } from 'react'
import { ReactNode } from 'react'
import './App.css'
// import { PromiseError } from './components/ErrorBoundaryExamples'
// import { getCharacter } from './services/api.service'
// import { Character } from './models'
// import { useApi } from './hooks/useApi'

// import { EffectExample } from './components/ErrorBoundaryExamples'
// import UndefinedExample from './components/ErrorBoundaryExamples/UndefinedExample'
// import { Modal } from './components'
// import { useModalContext } from './components/Modal/Context'
// import { BookReader } from './components'
// import { FocusInput } from './components/UseRef'
// import { ShoppingCart } from './components'
// import { PhoneBook } from './components'

interface Props {
  children: ReactNode
}

function App({children}: Props) {

  // const { setState } = useModalContext()

  // const openModal = () => {
  //   setState(true)
  // }

  //forma 1
  // const [data, setData] = useState<Character>(emptyCharacter)

  // const fetchCharacter = async () => {
  //   const result = await getCharacter(2)
  //   setData(result.data)
  // }

  // useEffect(() => {
  //   fetchCharacter()
  // }, [])

  //forma 2
  // const {loading, error, data, fetch} = useApi<Character, number>(getCharacter)

  // if(loading) {
  //   return(<p>Cargando...</p>)
  // }

  // if(error){
  //   return (<p>{error.message} </p>)
  // }

  return (
    <>
      {/* <BookReader></BookReader> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ShoppingCart /> */}
      {/* <PhoneBook /> */}
      {/* <Modal>
        <div>
          Hola Juan
        </div>
      </Modal>

      <button onClick={openModal}>
        Abrete Sésamo
      </button> */}

      {/* <PromiseError /> */}
      {/* {JSON.stringify(data)}
      <button onClick={() => fetch(2)}></button> */}
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  )
}

export default App