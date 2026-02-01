import { type FormEvent, useState } from "react";
import "./CreateTaskModal.css";

export interface Task {
  id?: number;
  titulo: string;
  descripcion?: string;
  imagen?: string;
  createdAt?: string;
}

interface CreateTaskModalProps {
  onClose: () => void;
  onCreated: (task: Task) => void;
}

function CreateTaskModal({ onClose, onCreated }: CreateTaskModalProps) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No estás autenticado");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ titulo, descripcion, imagen }),
      });

      if (!res.ok) throw new Error("Error al crear la tarea");

      const newTask = await res.json();
      onCreated(newTask);
      onClose();
    } catch (err) {
      setError("No se pudo crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card">
          <div className="card-image">
            <img
              src={imagen || "https://picsum.photos/400/200"}
              alt="Preview"
            />
          </div>

          <form className="card-content" onSubmit={handleSubmit}>
            <span className="card-tag">Nueva tarea</span>

            <input
              className="card-input"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />

            <textarea
              className="card-textarea"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <input
              className="card-input"
              placeholder="URL de la imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <div className="card-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                disabled={loading}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? "Creando..." : "Crear"}
              </button>
            </div>
          </form>

          <div className="card-footer">
            <small>Modo oscuro · estilo Discord</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
