import React, { useState, useEffect } from "react";

const Hogwarts = () => {
  const [characters, setCharacters] = useState([]); // Lista de personajes
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Lista filtrada
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [searchTerm, setSearchTerm] = useState(""); // Valor del buscador
  const charactersPerPage = 5; // Cantidad de personajes por página

  // Llamada a la API al cargar la página
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await response.json();
        const selectedCharacters = data.slice(0, 25); // Seleccionamos los primeros 25 personajes
        setCharacters(selectedCharacters);
        setFilteredCharacters(selectedCharacters);
      } catch (error) {
        console.error("Error obteniendo los personajes", error);
      }
    };

    fetchCharacters();
  }, []);

  // Manejo de búsqueda
  useEffect(() => {
    const results = characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(results);
    setCurrentPage(1); // Reinicia la paginación al buscar
  }, [searchTerm, characters]);

  // Obtener los personajes de la página actual
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-4">📜 Hogwarts: Lista de Personajes</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="mb-6 p-2 text-black rounded-lg w-80"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de personajes */}
      <div className="w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((char, index) => (
            <div key={index} className="p-4 border-b border-gray-600">
              <h2 className="text-xl font-semibold">{char.name}</h2>
              <p className="text-gray-300">{char.house || "Sin casa"}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No se encontraron resultados</p>
        )}
      </div>

      {/* Paginador */}
      <div className="flex space-x-2 mt-4">
        {[...Array(Math.ceil(filteredCharacters.length / charactersPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hogwarts;
