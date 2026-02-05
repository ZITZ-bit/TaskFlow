import { useEffect, useState } from "react";

import ActionBar from "../../../components/ActionBar/ActionBar";
import CreateTaskModal, {
  type Task,
} from "../../../components/CreateTaskModal/CreateTaskModal";
import TaskCard from "../../../components/TaskCard/TaskCard";

import "./Inicio.css";

export default function Inicio() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:3001/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
  }, []);

  const handleTaskCreated = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  return (
    <div className="ContainerInicio">
      <ActionBar onCreateTask={() => setShowCreateModal(true)} />

      <main className="NuevaTarea">
        {/* 🧩 TAREAS */}
        <section className="dashboard-section">
          <header className="section-header">
            <h2>🧩 Tareas</h2>
            <span>{tasks.length} tareas</span>
          </header>

          {tasks.length === 0 ? (
            <p className="empty-state">No hay tareas creadas aún</p>
          ) : (
            <div className="cards-grid">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </section>

        {/* 📁 PROYECTOS */}
        <section className="dashboard-section muted">
          <header className="section-header">
            <h2>📁 Proyectos</h2>
          </header>
          <p className="placeholder">Próximamente…</p>
        </section>

        {/* 🏷️ ETIQUETAS */}
        <section className="dashboard-section muted">
          <header className="section-header">
            <h2>🏷️ Etiquetas</h2>
          </header>
          <p className="placeholder">En construcción…</p>
        </section>
      </main>

      {showCreateModal && (
        <CreateTaskModal
          onClose={() => setShowCreateModal(false)}
          onCreated={handleTaskCreated}
        />
      )}
    </div>
  );
}
