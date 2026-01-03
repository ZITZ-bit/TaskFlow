/* Componentes De Next */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* Componentes Reutilizables */


/* Estilos y Modulos */

import "./SideBar.css";

/* Lógica de Componentes */

import { useSessionTimer } from "../../hooks/useSessionTimer";

/* Animaciones */


function SideBar() {
  const [user, setUser] = useState<any>(null);
  const sessionTime = useSessionTimer();

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <aside className="sidebar">

      <section className="sidebar-header">

        <h2 className="sidebar-username">{user ? user.nombre : "Usuario"}</h2>
        <span className="sidebar-status">En línea · {sessionTime}</span>
      
      </section>

      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/inicio" className="sidebar-link">Inicio</Link></li>
          <li><Link to="/tareas" className="sidebar-link">Mis Tareas</Link></li>
          <li><Link to="/proyectos" className="sidebar-link">Proyectos</Link></li>
          <li><Link to="/estadisticas" className="sidebar-link">Estadisticas</Link></li>
          <li><Link to="/notificaciones" className="sidebar-link">Notificaciones</Link></li>
        </ul>
      </nav>

      <section className="sidebar-footer">
        <ul>
          <li><Link to="/configuracion" className="sidebar-link">Configuración</Link></li>
          <li><Link to="/" className="sidebar-link">Cerrar Sesión</Link></li>
        </ul>
      </section>

    </aside>
  );
}

export default SideBar;
