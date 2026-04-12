import { Link } from "react-router";
import "../styles/productCard.css";
import { AddCart, Star } from "./Icons";

export function ProductCard({
  id,
  imagen,
  category,
  titulo,
  rating,
  precio,
  handleFunction,
}) {
  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-img">
        <img className="product-img" src={imagen} alt={titulo} />
      </Link>

      <section className="product-section">
        <header className="product-header">
          <p className="product-header-category">{category}</p>
          <div className="product-header-rating">
            <Star width={"12"} height={"12"} color={"#f59f0b"} />
            <strong>{rating}</strong>
          </div>
        </header>
        <p className="product-title">{titulo}</p>
        <span className="product-price">${precio}</span>

        <button className="product-button" onClick={handleFunction}>
          <AddCart className="add-icon" width={"16px"} height={"16px"} />
          <p>Añadir</p>
        </button>
      </section>
    </div>
  );
}
