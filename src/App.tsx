import { useEffect, useState } from "react";
import "./App.css";

interface Producto {
  productId: number;
  name: string;
  price: number;
}

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://semana9-desarrollo-web-integrado.onrender.com/products/all")
      .then((res) => res.json())
      .then((data: Producto[]) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Tienda UTP</h1>

        <p className="subtitle">
          Lista de productos conectados desde Render + PostgreSQL
        </p>

        <div className="products">
          {productos.map((producto) => (
            <div key={producto.productId} className="product-card">
              <div>
                <h3>{producto.name}</h3>
                <p>Producto disponible</p>
              </div>

              <span className="price">
                S/. {producto.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;