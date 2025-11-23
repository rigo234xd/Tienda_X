import { useEffect, useState } from "react";
import { getProducts } from "./api/productos";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    }

    loadProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tienda de Productos</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{p.nombre}</h2>
            <p style={styles.price}>${p.precio.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 👉 2 columnas
    gap: "20px",
  },
  card: {
    background: "#f7f7f7",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  cardTitle: {
    margin: "0",
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "18px",
  },
};
