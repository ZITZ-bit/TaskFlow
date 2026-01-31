/* Componentes De Next */

import { LuPlus, LuFolderPlus, LuTag, LuCalendarDays } from "react-icons/lu";

/* Componentes Reutilizables */

/* Estilos y Modulos */

import "./ActionBar.css";

/* Iconos */


/* Lógica de Componentes */

/* Animaciones */

function ActionBar() {
  return (
    <div className="action-bar">
      <button className="action-btn" title="Nueva tarea">
        <LuPlus />
      </button>

      <button className="action-btn" title="Nuevo proyecto">
        <LuFolderPlus />
      </button>

      <button className="action-btn" title="Nueva etiqueta">
        <LuTag />
      </button>

      <button className="action-btn" title="Planificar semana">
        <LuCalendarDays />
      </button>
    </div>
  );
}

export default ActionBar;
