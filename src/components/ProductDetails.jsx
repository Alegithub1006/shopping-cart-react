import { useParams } from "react-router";
//import { useProductID } from "../hooks/useProductID";
//import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import "../styles/productDetail.css";
import { AddCart, Star } from "./Icons";
import { useCart } from "../hooks/useCart";
import { ListReview } from "./ListReviews";

export function ProductDetails() {
  const { id } = useParams();
  const { product } = useProducts();
  const { addToCart } = useCart();

  const prodDetail = product.find((product) => product.id === Number(id));

  if (prodDetail === undefined) {
    console.log("producto no encontrado");
    return <p>producto no encontrado</p>;
  }

  return (
    <main className="product-details">
      <h1 className="details-title">Product Details</h1>
      <article className="product-details-info">
        <div className="product-details-image">
          <img
            className="details-image"
            src={prodDetail.thumbnail}
            alt={prodDetail.title}
          />
        </div>
        <aside className="product-details-info-section">
          <h2 className="info-section-title">{prodDetail.title}</h2>
          <div className="info-section-rating-brand">
            <span className="rating">
              <Star
                color={"var(--primary-color)"}
                width={"20px"}
                height={"20px"}
              />

              <p>{prodDetail.rating}</p>
            </span>
            <span className="brand">{prodDetail.brand}</span>
          </div>
          <p className="details-info-price">${prodDetail.price}</p>
          <p className="details-info-description">{prodDetail.description}</p>
          <button
            className="details-button"
            onClick={() => {
              addToCart(prodDetail);
            }}>
            <AddCart width={"20px"} height={"20px"} />
            <p>Add to Cart</p>
          </button>
          <div className="details-info-dimensions">
            <h3 className="dimensions-title">Dimensions</h3>
            <div className="dimensions">
              <div className="dimensions-sections">
                <h3 className="dimensions-subtitle">Width</h3>
                <p className="data"> {prodDetail.dimensions.width}</p>
              </div>
              <div>
                <h3 className="dimensions-subtitle">Height</h3>
                <p className="data">{prodDetail.dimensions.height}</p>
              </div>
              <div>
                <h3 className="dimensions-subtitle">Depth</h3>
                <p className="data">{prodDetail.dimensions.depth}</p>
              </div>
            </div>
          </div>
        </aside>
      </article>

      <article className="product-details-review">
        <h3>reviews</h3>
        <ListReview list={prodDetail.reviews} />
      </article>
    </main>
  );
}
