import './App.css'
import {Button, ColorRed, AppForm} from './components'

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
    <>
      <ColorRed><Button parentMethod={dimeHola}>Juan</Button></ColorRed>
      <Button parentMethod={handleClick}>My Button normal</Button>
      <AppForm>
        <Button parentMethod={submit}>Submit</Button>
      </AppForm>
    </>
  )
}

export default App