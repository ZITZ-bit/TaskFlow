/* Componentes De Next */


/* Componentes Reutilizables */


/* Estilos y Modulos */

import "./TaskCard.css";

/* Lógica de Componentes */


/* Animaciones */


function SideBar() {
  return (
    <div className="card">

      <div className="card-image">
        <img src="https://picsum.photos/400/200" alt="Imagen" />
      </div>

      <div className="card-content">

        <span className="card-tag">Importante</span>

        <h3 className="card-title">Título del Card</h3>

        <p className="card-text">
          Esta es una breve descripción del contenido del card. Proporciona información adicional sobre el elemento.
        </p>

      </div>

      <div className="card-actions">
        <button className="btn-primary">Ver más</button>
        <button className="btn-secondary">Editar</button>
      </div>

      <div className="card-footer">
        <small>Actualizado: 12/01/2026</small>
      </div>

    </div>
  );
}

export default SideBar;
