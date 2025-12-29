import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- importamos useNavigate

import "../../styles/Registro.css";

export default function Registro() {

  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    usuario: "",
    clave: "",
    confirmacion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.clave !== form.confirmacion) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error al registrar");
        return;
      }

      alert("Usuario registrado correctamente");
      navigate("/"); // <-- redirige automáticamente a login
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <main className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>

        <section className="titulo-register">
          <h1>Crear cuenta</h1>
        </section>

        <section className="inputs">

          <section className="input-row">
            <div className="input-group">
              <input type="text" name="nombres" required value={form.nombres} onChange={handleChange} />
              <label>Nombre</label>
            </div>

            <div className="input-group">
              <input type="text" name="apellidos" required value={form.apellidos} onChange={handleChange} />
              <label>Apellido</label>
            </div>
          </section>

          <section className="input-row">
            <div className="input-group">
              <input type="text" name="cedula" required value={form.cedula} onChange={handleChange} />
              <label>Cédula</label>
            </div>

            <div className="input-group">
              <input type="text" name="usuario" required value={form.usuario} onChange={handleChange} />
              <label>Usuario</label>
            </div>
          </section>

          <div className="input-group">
            <input type="password" name="clave" required value={form.clave} onChange={handleChange} />
            <label>Contraseña</label>
          </div>

          <div className="input-group">
            <input type="password" name="confirmacion" required value={form.confirmacion} onChange={handleChange} />
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
  );
}
