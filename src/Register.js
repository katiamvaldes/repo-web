import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", form);
    navigate("/"); // Redirige al Login después de registrarse
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-white font-semibold">
            Registrarse
          </button>
        </form>
        <p className="mt-4">
          ¿Ya tienes una cuenta?{" "}
          <a href="/" className="text-blue-400 hover:text-blue-300">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
