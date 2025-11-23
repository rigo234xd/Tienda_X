import { useState, useEffect } from "react";
import { updateProduct } from "../api/productos";

export default function EditarProducto({ producto, onUpdated }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setImagen(producto.imagen); // <-- faltaba esto
    }
  }, [producto]);

  if (!producto) return null;

  async function enviar(e) {
    e.preventDefault();

    await updateProduct(producto.id, {
      nombre,
      precio: parseFloat(precio),
      imagen, // <-- FastAPI lo necesita sí o sí
    });

    onUpdated();
  }

  return (
    <form onSubmit={enviar}>
      <h2>✏ Editar Producto</h2>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <input
        type="text"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        placeholder="URL de la imagen"
      />

      <button type="submit">Guardar Cambios</button>
    </form>
  );
}
