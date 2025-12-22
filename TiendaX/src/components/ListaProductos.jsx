import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productos"; 
import ProductCard from "./ProductCard";
import Busqueda from "./Busqueda"; // ¡Importamos el nuevo componente!

export default function ListaProductos({ onEdit, onDelete }) {
  // 1. Lista COMPLETA (se carga una vez)
  const [productosOriginales, setProductosOriginales] = useState([]); 
  // 2. Lista FILTRADA (la que se renderiza)
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  // 3. Término de búsqueda
  const [searchTerm, setSearchTerm] = useState(""); 

  // Carga inicial de productos
  useEffect(() => {
    cargarProductos();
  }, [onDelete]); 

  async function cargarProductos() {
    try {
      const data = await getProducts();
      setProductosOriginales(data); 
      setProductosFiltrados(data);  
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  }

  // Función para manejar la eliminación (si ya la tienes, mantenla)
  async function handleEliminar(id) {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await deleteProduct(id);
        onDelete(); // Notifica a App.jsx para que recargue (llama a cargarProductos)
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  }

  // Lógica de filtrado: Se ejecuta cuando cambia searchTerm o la lista original
  useEffect(() => {
    if (searchTerm === "") {
      setProductosFiltrados(productosOriginales);
      return;
    }

    const filtered = productosOriginales.filter(producto =>
      // Filtra por nombre (insensible a mayúsculas/minúsculas)
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductosFiltrados(filtered);
    
  }, [searchTerm, productosOriginales]); 

  return (
    <>
      {/* Colocamos la barra de búsqueda */}
      <Busqueda onSearch={setSearchTerm} /> 

      <div className="product-grid"> 
        {productosFiltrados.map((p) => ( // Mapeamos la lista FILTRADA
          <ProductCard
            key={p.id}
            producto={p}
            onEdit={onEdit}
            onDelete={handleEliminar} 
          />
        ))}
        {productosFiltrados.length === 0 && (
          <p className="no-results">No se encontraron productos para "{searchTerm}"</p>
        )}
      </div>
    </>
  );
}