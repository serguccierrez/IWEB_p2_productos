import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  let navigate = useNavigate();

  // Función para navegar a la página de un producto
  function handleClickNavigation() {
    navigate(`/products/${props.producto_id}`);
  }

  return (
    <Card className="unproducto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.producto.thumbnail} />
      <Card.Body>
        <Card.Title className="title">{props.producto.title}</Card.Title>
        <Card.Text className="description">
          {props.producto.description}
        </Card.Text>
        <Button
          className="button"
          variant="primary"
          onClick={handleClickNavigation}
        >
          Ver
        </Button>
      </Card.Body>
    </Card>
  );
}
