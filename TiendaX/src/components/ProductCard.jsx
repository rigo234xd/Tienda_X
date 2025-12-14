export default function ProductCard({ producto, onEdit, onDelete }) {
  const handleDeleteClick = () => {
    // Asegurarse de que onDelete es la función que llama a deleteProduct(id)
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${producto.nombre}"?`)) {
      onDelete(producto.id);
    }
  };

  return (
    // Usamos una clase única para la tarjeta
    <div className="product-item-card">
      
      {/* Contenedor de la Imagen */}
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

      {/* Información del Producto */}
      <h3 className="product-name">{producto.nombre}</h3>
      <p className="product-price">${parseFloat(producto.precio).toFixed(2)}</p>

      {/* Botones de Acción */}
      <div className="product-actions"> 
        <button
          onClick={() => onEdit(producto)}
          className="btn-edit-card"
        >
          Editar
        </button>
        <button
          onClick={handleDeleteClick}
          className="btn-delete-card"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}