import { useState } from "react";
import { createProduct } from "../api/productos";

export default function CrearProducto({ onCreated }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  async function enviar(e) {
    e.preventDefault();

    await createProduct({
      nombre,
      precio: parseFloat(precio),
      imagen,
    });

    onCreated(); // recarga lista

    setNombre("");
    setPrecio("");
    setImagen("");
  }

  return (
    <form onSubmit={enviar}>
      <h2>Crear Producto</h2>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Precio"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <input
        placeholder="URL Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />

      <button type="submit">Crear</button>
    </form>
  );
}
