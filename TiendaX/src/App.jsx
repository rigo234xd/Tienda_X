// App.jsx
import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import CrearProducto from "./components/CrearProducto";
import EditarProducto from "./components/EditarProducto";
import EliminarProducto from "./components/EliminarProducto";

function App() {
  const [editando, setEditando] = useState(null);
  const [eliminando, setEliminando] = useState(null);
  const [refrescar, setRefrescar] = useState(false);

  function reload() {
    setRefrescar(!refrescar);
    setEditando(null);
    setEliminando(null);
  }

  return (
    <div className="container">
      <h1>🛒 Gestor de Productos</h1>

      <CrearProducto onCreated={reload} />

      <ListaProductos
        key={refrescar}
        onEdit={(p) => setEditando(p)}
        onDelete={(id) => setEliminando(id)}
      />

      <EditarProducto producto={editando} onUpdated={reload} />

      <EliminarProducto id={eliminando} onDeleted={reload} />
    </div>
  );
}

export default App;
