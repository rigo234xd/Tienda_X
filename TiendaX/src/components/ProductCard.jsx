// Agregamos la prop isAdmin que por defecto es false
export default function ProductCard({ producto, isAdmin = false, onEdit, onDelete }) {
  
  return (
    <div className="product-item-card">
      
      {/* Contenedor de la Imagen - SE MANTIENE IGUAL */}
      <div className="product-image-wrapper"> 
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="product-image"
          />
        ) : (
          <div className="product-image-placeholder">
            Sin imagen
          </div>
        )}
      </div>

      {/* Información del Producto - SE MANTIENE IGUAL */}
      <h3 className="product-name">{producto.nombre}</h3>
      <p className="product-price">${parseFloat(producto.precio).toFixed(2)}</p>

      {/* SECCIÓN DE ACCIONES - EDITADA */}
      <div className="product-actions"> 
        {isAdmin ? (
          // Si es admin, mostramos lo que ya tenías
          <>
            <button onClick={() => onEdit(producto)} className="btn-edit-card">
              Editar
            </button>
            <button onClick={() => onDelete(producto.id)} className="btn-delete-card">
              Eliminar
            </button>
          </>
        ) : (
          // Si es USUARIO, mostramos botones de compra o detalles
          <button 
            className="btn-add-cart" 
            onClick={() => console.log("Añadido al carrito", producto.id)}
          >
            Añadir al carrito
          </button>
        )}
      </div>
    </div>
  );
}