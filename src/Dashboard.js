import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Regresa a la pantalla de Login
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Barra de Menú */}
      <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Sitio</h1>
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="#" className="hover:text-gray-400 transition">Home</a>
            </li>
            <li>
              <a href="/hogwarts" className="hover:text-gray-400 transition">Hogwarts</a>
            </li>
            <li>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="flex items-center justify-center h-screen pt-16">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">Bienvenido al Dashboard</h2>
          <p className="text-gray-300 mt-2">Explora la magia de Hogwarts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
