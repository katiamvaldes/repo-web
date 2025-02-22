import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Regresa a la página de login al cerrar sesión
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold">Bienvenido al Dashboard</h2>
        <p className="text-gray-300 mt-2">Has iniciado sesión correctamente.</p>

        {/* Botón de Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded hover:opacity-80 transition font-semibold"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
