import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && contrasena === '1234') {
      navigate('/dashboard'); 
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
        <form onSubmit={manejarEnvio} className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-white font-semibold">
            Ingresar
          </button>
        </form>
        <p className="mt-4">
          <a href="/forgot-password" className="text-blue-400 hover:text-blue-300">
            ¿Olvidaste tu contraseña?
          </a>
        </p>
        <p className="mt-2">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-blue-400 hover:text-blue-300">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
