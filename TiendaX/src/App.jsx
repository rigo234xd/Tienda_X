import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import "./App.css";

export default function App() {
  // Solo mantenemos el término de búsqueda y el estado de recarga (opcional)
  const [reload, setReload] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  function refrescar() {
    setReload(!reload);
  }

  return (
    <div className="app-container">
      {/* Puedes agregar un header más amigable para el usuario */}
      <header className="user-header">
        <h1 className="titulo"> Nuestra Tienda</h1>
      </header>

      {/* LISTA DE PRODUCTOS 
         Quitamos onEdit y onDelete ya que el usuario no tiene estas funciones.
         Si modificaste ProductCard con la prop 'isAdmin', aquí no la pasas.
      */}
      <ListaProductos
        key={reload} 
        onSearch={setSearchTerm} 
        searchTerm={searchTerm}  
      />
      
      {/* Footer simple opcional */}
      <footer className="footer">
        <p>© 2024 Tienda de Productos - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}