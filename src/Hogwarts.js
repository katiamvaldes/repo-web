import React, { useState } from "react";

const Hogwarts = () => {
  const [fact, setFact] = useState("");

  const obtenerFunFact = async () => {
    try {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();

      // Selecciona un personaje aleatorio y muestra su descripción
      const randomCharacter = data[Math.floor(Math.random() * data.length)];
      setFact(`${randomCharacter.name}: ${randomCharacter.house ? randomCharacter.house : "Sin casa"}`);
    } catch (error) {
      console.error("Error obteniendo el fun fact", error);
      setFact("No se pudo obtener un dato, intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido a Hogwarts! 🏰</h1>
      <p className="text-gray-300 mb-4">Haz clic en el botón para conocer un dato curioso sobre Harry Potter.</p>

      <button
        onClick={obtenerFunFact}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white transition font-semibold"
      >
        Fun Fact de Harry Potter
      </button>

      {fact && (
        <div className="mt-4 bg-gray-800 p-4 rounded shadow-lg text-center">
          <p className="text-lg font-medium">{fact}</p>
        </div>
      )}
    </div>
  );
};

export default Hogwarts;
