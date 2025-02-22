import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (usuario === "admin" && contrasena === "1234") {
      navigate("/dashboard"); // Redirige si las credenciales son correctas
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold text-white text-center mb-4">Login</h2>

        {/* Formulario */}
        <form onSubmit={manejarEnvio} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded hover:opacity-80 transition font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
