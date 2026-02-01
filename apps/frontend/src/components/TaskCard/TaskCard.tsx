import "./TaskCard.css";
import type { Task } from "../CreateTaskModal/CreateTaskModal";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="card">

      <div className="card-image">
        <img
          src={task.imagen || "https://picsum.photos/400/200"}
          alt="Imagen"
        />
      </div>

      <div className="card-content">
        <span className="card-tag">Importante</span>
        <h3 className="card-title">{task.titulo}</h3>
        <p className="card-text">{task.descripcion}</p>
      </div>

      <div className="card-actions">
        <button className="btn-primary">Ver más</button>
        <button className="btn-secondary">Editar</button>
      </div>

      <div className="card-footer">
        <small>
          Creado: {task.createdAt ?? "Hoy"}
        </small>
      </div>

    </div>
  );
}

export default TaskCard;
