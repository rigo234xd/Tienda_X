const API_URL = import.meta.env.VITE_API_URL;

console.log("API URL:", API_URL);

// GET → obtener productos
export async function getProducts() {
  const res = await fetch(`${API_URL}/productos`);
  return await res.json();
}

// POST → crear producto
export async function createProduct(producto) {
  const res = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen, // 👈 AQUI VA LA IMAGEN
    }),
  });

  return await res.json();
}
