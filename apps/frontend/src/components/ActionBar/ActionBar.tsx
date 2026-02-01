/* Componentes De Next */

import { LuPlus, LuFolderPlus, LuTag, LuCalendarDays } from "react-icons/lu";

/* Estilos */

import "./ActionBar.css";

interface ActionBarProps {
  onCreateTask: () => void;
}

function ActionBar({ onCreateTask }: ActionBarProps) {
  return (
    <div className="action-bar">
      <button className="action-btn" title="Nueva tarea" onClick={onCreateTask}>
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
