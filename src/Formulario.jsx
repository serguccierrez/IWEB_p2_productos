import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Location from "./Location";
import "./Formulario.css"; // Importa el archivo CSS

export default function Formulario(props) {
  // Variable de estado para guardar el texto del input
  const [inputText, setInputText] = useState("");
  // Variable de estado para guardar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Variable de estado para guardar los parámetros de búsqueda
  const [searchParams, setSearchParams] = useSearchParams();
  // Variable de estado para guardar los productos 
  const productos = props.theproducts;

  // Función para filtrar productos por texto
  function filterProducts(array, text) {
    let filt_array = array.filter((el_producto) =>
      el_producto.title.toLowerCase().includes(text.toLowerCase())
    );

    return filt_array;
  }

  // Función para filtrar productos por categoría
  function filteredProductsByCategory(array, selectedCategory) {
    if (selectedCategory === "All") {
      setSearchParams({ category: selectedCategory });
      return array;
    } else {
      let filt_array = array.filter(
        (el_producto) => el_producto.category === selectedCategory
      );

      setSearchParams({ category: selectedCategory });

      return filt_array;
    }
  }

  function aux_filterProducts() {
    const filt_array = filterProducts(productos, inputText);
    props.setFilteredProductsToShow(filt_array);

    console.log("Productos filtrados: ", filt_array);
  }

  // Función para obtener las categorías de los productos
  function get_categories() {
    const categorias = productos.reduce((categories_arr, productoActual) => {
      if (!categories_arr.includes(productoActual.category)) {
        categories_arr.push(productoActual.category);
      }

      return categories_arr;
    }, []);

    return categorias;
  }

  useEffect(() => {
    const filt_array = filteredProductsByCategory(productos, selectedCategory);
    props.setFilteredProductsToShow(filt_array);
  }, [selectedCategory]);

  return (
    <>
      <Location />

      <div id="Formulario-container">
        <input
          type="text"
          id="filtro"
          placeholder="Buscar productos"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <select
          name="selector"
          id="selector"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {get_categories().map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <button id="buscador" onClick={aux_filterProducts}>
          Buscar
        </button>
      </div>
    </>
  );
}
