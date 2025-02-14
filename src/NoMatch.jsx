import React from "react";
import { useNavigate } from "react-router-dom";
import "./NoMatch.css";

export default function NoMatch() {
  let navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div id="info">
      <h1>Ruta no encontrada</h1>
      <button id="volver" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}
