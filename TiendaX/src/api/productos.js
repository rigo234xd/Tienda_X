const API_URL = import.meta.env.VITE_API_URL;

console.log("API URL:", API_URL);

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
