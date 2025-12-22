import React from 'react';

export default function Modal({ onClose, children }) {
  
  // Evita que hacer clic en el formulario cierre la ventana
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Fondo oscuro (Overlay) que se cierra al hacer click fuera
    <div className="modal-overlay" onClick={onClose}>
      
      {/* Contenedor de la ventana centrada */}
      <div className="modal-content" onClick={handleContentClick}>
        
        {/* Botón de cierre (la "X") */}
        <button className="modal-close-btn" onClick={onClose}>
          &times; 
        </button>
        
        {/* El contenido (tu formulario CrearProducto) */}
        {children}
      </div>
    </div>
  );
}