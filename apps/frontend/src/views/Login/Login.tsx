import { Link } from "react-router-dom";

import "../../styles/Login.css";

export default function Login() {
  return(
    <>
      <header>

      </header>

      <main className="login-container">
        <form className="login-form">

          <section className="titulo-login">
            <h1>Iniciar sesión</h1>
          </section>

          <section className="inputs">

            <div className="input-group">
              <input type="email" required />
              <label>Usuario</label>
            </div>

            <div className="input-group">
              <input type="password" required />
              <label>Contraseña</label>
            </div>

          </section>

          <button type="submit" className="login-btn">
            Entrar
          </button>

          <p className="register-link">
            ¿No tienes cuenta? <Link to="/register">Registrate</Link>  
          </p>

        </form>
      </main>

      <footer>

      </footer>
    </>
  );
}