import { useEffect, useState } from "react";
import { getProducts } from "../api/productos";

export default function ListaProductos({ onEdit, onDelete }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const data = await getProducts();
    setProductos(data);
  }

  return (
    <div className="grid">
      {productos.map((p) => (
        <div key={p.id} className="card">
          <img src={p.imagen} className="img" alt={p.nombre} />

          <h3>{p.nombre}</h3>
          <p>${p.precio}</p>

          <div className="row">
            <button onClick={() => onEdit(p)}>Editar</button>
            <button onClick={() => onDelete(p.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
