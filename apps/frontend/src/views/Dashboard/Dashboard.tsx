/* Componentes De Next */

import { Outlet } from "react-router-dom";

/* Componentes Reutilizables */

import SideBar from "../../components/SiderBar/SideBar";

/* Estilos y Modulos */

import "../../styles/Dashboard.css";

/* Lógica de Componentes */


/* Animaciones */

export default function Dashboard() {
  return(
    <>
      <header className="HeaderDashboard">
        <SideBar />
      </header>

      <main className="MainDashboard">
        <section>
          <Outlet/>
        </section>
      </main>

      <footer>
        
      </footer>
    </>
  );
}