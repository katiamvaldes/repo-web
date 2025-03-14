import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recuperación solicitada para:", email);
    alert("Si el correo existe en nuestro sistema, recibirás un enlace de recuperación.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Recuperar Contraseña</h2>
        <p className="text-gray-400 mb-4">Introduce tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-white font-semibold">
            Enviar Enlace
          </button>
        </form>
        <p className="mt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300">
            Volver al Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
