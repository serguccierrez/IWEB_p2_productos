import React from "react";
import "./Lista.css";
import ProductCard from "./ProductCard";

export default function Lista(props) {
  const productos = props.productos;


  return (
    <div id="productosresultados">
      {productos.map((producto, index) => (
        <ProductCard key={index} producto={producto} producto_id={producto.id}/>
      ))}
    </div>
  );
}
