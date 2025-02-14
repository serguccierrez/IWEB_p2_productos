import React from "react";
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Loading() {
  return (
    <Spinner id='loading' className="spinner" animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}


