import { useState } from "react";
import CrearProducto from "./components/CrearProducto";
import EditarProducto from "./components/EditarProducto";
import ListaProductos from "./components/ListaProductos";
import Modal from "./components/Modal"; // 1. Importamos el componente Modal
import "./App.css";

export default function App() {
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);
  const [reload, setReload] = useState(false);
  
  // 2. Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState(''); 

  function refrescar() {
    // Alterna el estado para forzar la recarga de ListaProductos
    setReload(!reload);
  }

  // Función que se pasa a ListaProductos para manejar el click en el botón Editar
  const handleEdit = (producto) => {
    setProductoEditar(producto);
  }

  // Función que se usa para cerrar el modal de edición
  const closeEditModal = () => {
    setProductoEditar(null);
  }

  return (
    <div className="app-container">
      <h1 className="titulo"> Tienda de Productos</h1>

      <button className="btn-crear" onClick={() => setMostrarCrear(true)}>
         Crear Producto
      </button>

      {/* 3. LISTA DE PRODUCTOS */}
      {/* Pasamos setSearchTerm y el valor actual de searchTerm a ListaProductos */}
      <ListaProductos
        key={reload} // Fuerza recarga al refrescar
        onEdit={handleEdit}
        onDelete={refrescar}
        onSearch={setSearchTerm} // Función que ListaProductos usa para actualizar el término
        searchTerm={searchTerm}  // El término actual para que ListaProductos filtre
      />

      {/* 4. MODAL CREAR PRODUCTO */}
      {mostrarCrear && (
        <Modal onClose={() => setMostrarCrear(false)}>
          <CrearProducto
            onCreated={() => {
              refrescar();
              setMostrarCrear(false); // Cierra el modal después de crear
            }}
          />
        </Modal>
      )}

      {/* 5. MODAL EDITAR PRODUCTO */}
      {productoEditar && (
        <Modal onClose={closeEditModal}>
          <EditarProducto
            producto={productoEditar}
            onUpdated={() => {
              refrescar();
              setProductoEditar(null); // Cierra el modal después de actualizar
            }}
          />
        </Modal>
      )}
    </div>
  );
}