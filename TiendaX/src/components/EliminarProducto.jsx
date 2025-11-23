// EliminarProducto.jsx
import { deleteProduct } from "../api/productos";

export default function EliminarProducto({ id, onDeleted }) {
  async function confirmar() {
    await deleteProduct(id);
    onDeleted();
  }

  if (!id) return null;

  return (
    <div>
      <h2>❌ Eliminar Producto</h2>
      <p>¿Seguro que deseas eliminar este producto?</p>
      <button onClick={confirmar}>Sí, eliminar</button>
    </div>
  );
}
