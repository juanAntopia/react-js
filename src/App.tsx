import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/Context/ModalContext'
// import { BookReader } from './components'
// import { FocusInput } from './components/UseRef'
// import { ShoppingCart } from './components'
// import { PhoneBook } from './components'

function App() {

  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
    <div>
      {/* <BookReader></BookReader> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ShoppingCart /> */}
      {/* <PhoneBook /> */}
      <Modal>
        <div>
          Hola Juan
        </div>
      </Modal>

      <button onClick={openModal}>
        Abrete Sésamo
      </button>
    </div>
  )
}

export default App