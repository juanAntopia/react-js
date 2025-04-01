import './App.css'
import {Button, ColorRed, AppForm} from './components'
import { GlobalProvider } from './context/global.provider'

function App() {
  const handleClick = () => {
    console.log('hola')
  }

  const dimeHola = () => {
    alert('hola')
  }

  const submit = () => {
    console.log('submit')
  }

  return (
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>Juan</Button></ColorRed>
      <Button parentMethod={handleClick}>My Button normal</Button>
      <AppForm>
        <Button parentMethod={submit}>Submit</Button>
      </AppForm>
    </GlobalProvider>
  )
}

export default App