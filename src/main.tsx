import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UseMemoPract } from './UseMemoPract.tsx'
import { UseCallBackPract } from './UseCallBackPract.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseCallBackPract/>
  </StrictMode>,
)
