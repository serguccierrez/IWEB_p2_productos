import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Location from "./Location";
import "./Producto.css";

export default function Producto(props) {
  // Obtiene el id del producto de los parámetros de la URL
  const { productId } = useParams();
  // Variable de estado para guardar los datos del producto
  const [producto, setProducto] = useState({});

  let navigate = useNavigate();

  let productos = props.theproducts;
  
  

  function findIdProduct() {
    let prod = productos.find(({id}) => { return id === Number(productId) });
    setProducto(prod);
  
  }
  

  function goHome() {
    navigate('/');
  }

  useEffect(() => {
    findIdProduct();
  }, []);

  return (
    <>
      <Location />
      <div className="producto">
        <img src={producto.thumbnail} alt={producto.title} />
        <h2 id="titulo">{producto.title}</h2>
        <p><strong>Descripción:</strong> {producto.description}</p>
        <p><strong>Precio:</strong> {producto.price}€</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
        <p><strong>Rating:</strong> {producto.rating}</p>
      </div>
      <button id="volver" onClick={goHome}>
        Volver
      </button>

    </>
  );
}
