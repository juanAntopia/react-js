import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { initAxios } from './services/axios.service.ts'
import AppHookContainer from './AppHookContainer.tsx'

initAxios()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>
)