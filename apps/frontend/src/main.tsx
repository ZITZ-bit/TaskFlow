import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Views - Routes

import Login from './views/Login/Login'
import Registro from './views/Registro/Registro'
import Dashboard from './views/Dashboard/Dashboard'

// Features - Routes

import MisTareas from './features/Dashboard/Tareas/MisTareas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registro />} />

        <Route path="/dashboard" element={<Dashboard />}>

          <Route path="tareas" element={<MisTareas />} />

        </Route>

      </Routes>
      
    </BrowserRouter>
  </StrictMode>
)
