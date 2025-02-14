import React, { useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Lista from "./Lista";

export default function SearchPage(props) {
// prop en la que se recibe el array de productos totales
  const productos = props.theproducts;

  // variable usada para almacenar los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState([]);


// función que se pasa como prop (setFilteredProductsToShow) al componente hijo Formulario para actualizar la variable de productos filtrados
  function handleFilterProducts(filt_array) {
    setFilteredProducts(filt_array);

  }

 


  return (
    <div id="SearchPage-container">
      <Header />
      <h3 id="catálogo">Catálogo de productos</h3>
      <Formulario theproducts={productos} setFilteredProductsToShow={handleFilterProducts}  />
      {filteredProducts ? (
        <Lista productos={filteredProducts} />
      ) : (
        <Lista productos={productos} />
      )}
    </div>
  );
}
