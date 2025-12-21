import { Link } from "react-router-dom";
import "../../styles/Registro.css";

export default function Registro() {
  return(
    <>
      <header>

      </header>

      <main className="register-container">
        <form className="register-form">

          <section className="titulo-register">
            <h1>Crear cuenta</h1>
          </section>

          <section className="inputs">

            <section className="input-row">

              <div className="input-group">
                <input type="text" required />
                <label>Nombre</label>
              </div>

              <div className="input-group">
                <input type="text" required />
                <label>Apellido</label>
              </div>

            </section>

            <section className="input-row">

              <div className="input-group">
                <input type="text" required />
                <label>Cédula</label>
              </div>

              <div className="input-group">
                <input type="text" required />
                <label>Usuario</label>
              </div>

            </section>

            <div className="input-group">
              <input type="password" required />
              <label>Contraseña</label>
            </div>

            <div className="input-group">
              <input type="password" required />
              <label>Confirmar contraseña</label>
            </div>

          </section>

          <button type="submit" className="register-btn">
            Registrarse
          </button>

          <p className="login-link">
            ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
          </p>

        </form>
      </main>

      <footer>

      </footer>
    </>
  );
}