import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login/Login'
import Registro from './views/Registro/Registro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
