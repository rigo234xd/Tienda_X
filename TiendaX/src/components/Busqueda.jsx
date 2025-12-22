import React from 'react';

/**
 * Componente de barra de búsqueda.
 * @param {object} props - Las props del componente.
 * @param {function} props.onSearch - Función llamada cuando el texto de búsqueda cambia.
 */
export default function Busqueda({ onSearch }) {
  
  const handleInputChange = (event) => {
    // Llama a la función onSearch del componente padre, pasando el valor actual
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos por nombre..."
        className="search-input"
        onChange={handleInputChange}
        // Recomendación: Si quieres un botón de búsqueda, agrégalo aquí
      />
    </div>
  );
}