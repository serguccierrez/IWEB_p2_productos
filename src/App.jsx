import { useState, useEffect } from "react";
import "./App.css";
import SearchPage from "./SearchPage";
import Loading from "./Loading";
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
import { Routes, Route } from "react-router-dom";
import Producto from "./Producto";
import NoMatch from "./NoMatch";

function App() {
  // Variable de estado para controlar si se está cargando la página
  const [isLoading, setLoading] = useState(true);
  // Variable de estado para guardar los datos de los productos
  const [data, setData] = useState("");






// Función para obtener los productos desde el servidor o desde el archivo mockdata
  async function fetchProducts() {
    try {
      if (CONFIG.use_server) {
        const url = `${CONFIG.server_url}?limit=${CONFIG.num_items}`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } else {
        setData(mockdata);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
 // Se ejecuta al cargar la página para obtener los productos y quitar el loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, CONFIG.loading_timeout_ms);
    fetchProducts();
  }, []);

  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={<SearchPage theproducts={data.products}  />}
            />
            <Route
              path="/products/:productId"
              element={<Producto theproducts={data.products} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
