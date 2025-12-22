const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const res = await fetch(`${API_URL}/productos`);
  return await res.json();
}

export async function createProduct(producto) {
  const res = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  return await res.json();
}

export async function updateProduct(id, producto) {
  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  return await res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}
