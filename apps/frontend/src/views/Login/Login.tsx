import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/Login.css";

export default function Login() {
  const [form, setForm] = useState({ 

    usuario: "", 
    clave: "",

  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Usuario o contraseña incorrectos");
        return;
      }

      // Guardar token en localStorage
      localStorage.setItem("token", data.access_token);

      alert("Login exitoso");
      // Redirigir a página principal
      navigate("/dashboard"); // ajusta según tu ruta
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <>
      <header></header>

      <main className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>

          <section className="titulo-login">
            <h1>Iniciar sesión</h1>
          </section>

          <section className="inputs">
            <div className="input-group">
              <input type="text" name="usuario" required value={form.usuario} onChange={handleChange} />
              <label>Usuario</label>
            </div>

            <div className="input-group">
              <input type="password" name="clave" required value={form.clave} onChange={handleChange} />
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
