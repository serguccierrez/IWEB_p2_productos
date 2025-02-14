import React from "react";
import AppLogo from "./assets/img/icono.png";
import USER from "../user.json";
import "./Header.css";

// Componente que muestra el encabezado de la página con el logo y un mensaje de bienvenida
export default function Header() {
  return (
    <div id="cabecera">
      <img className="logo" src={AppLogo} alt="Logo" />
      <h3 className="mensaje">Bienvenido a la página de {USER.name}</h3>
    </div>
  );
}
