import { useState } from "react";
// Asegúrate de que tu API maneje la descripción si la incluyes en el objeto.
import { createProduct } from "../api/productos"; 

export default function CrearProducto({ onCreated }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  // Estado para la nueva descripción
  const [descripcion, setDescripcion] = useState(""); 
  
  const [loading, setLoading] = useState(false); // Estado para evitar doble click

  async function enviar(e) {
    e.preventDefault();
    setLoading(true);

    try {
        await createProduct({
          nombre,
          // Convertimos el precio a número flotante
          precio: parseFloat(precio) || 0, 
          imagen,
          descripcion, // Añadimos la descripción
        });
    
        onCreated(); // Recarga lista y cierra el modal
        
    } catch (error) {
        console.error("Error al crear el producto:", error);
        alert("Hubo un error al crear el producto. Inténtalo de nuevo.");
    } finally {
        // Limpiamos los campos después de crear (o si falla)
        setNombre("");
        setPrecio("");
        setImagen("");
        setDescripcion("");
        setLoading(false);
    }
  }

  return (
    <form className="form-modal" onSubmit={enviar}>
      <h2 className="form-title"> Crear Nuevo Producto</h2>
      
      {/* Grupo: Nombre */}
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          placeholder="Ej: Camiseta de Algodón"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      {/* Grupo: Precio */}
      <div className="form-group">
        <label htmlFor="precio">Precio ($)</label>
        <input
          id="precio"
          placeholder="Ej: 15000"
          type="number"
          step="0.01" // Permite decimales
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      
      {/* Grupo: Descripción */}
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          placeholder="Breve descripción del producto."
          rows="3"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      {/* Grupo: Imagen */}
      <div className="form-group">
        <label htmlFor="imagen">URL de la Imagen</label>
        <input
          id="imagen"
          placeholder="https://example.com/imagen.jpg"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading} className="btn-submit">
        {loading ? "Creando..." : "Crear Producto"}
      </button>
    </form>
  );
}

