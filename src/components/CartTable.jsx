import "../styles/table.css";
import { Trash } from "./Icons";

export function CartTable({ cart, update, decreese, remove }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Quantity </td>
          <td>Price </td>
        </tr>
      </thead>
      <tbody>
        {cart.map((prod) => (
          <tr className="product-table" key={prod.id}>
            <td className="product-table-section">
              <img
                className="product-img-table"
                src={prod.images}
                alt={prod.title}
              />
              <div className="product-description">
                <p className="product-description-title">{prod.title}</p>
                <p className="product-description-category">{prod.category}</p>
              </div>
            </td>
            <td className="quantity-table-data">
              <div className="quantity-table-box">
                <button
                  className="quantity-table-button"
                  onClick={() => {
                    decreese(prod);
                  }}>
                  -
                </button>
                <p className="quantity">{prod.quantity}</p>
                <button
                  className="quantity-table-button"
                  onClick={() => {
                    update(prod);
                  }}>
                  +
                </button>
              </div>
            </td>
            <td className="price-table-section">
              <div className="price-table">
                <p className="price">{prod.price}</p>
                <button
                  className="trash-button"
                  onClick={() => {
                    remove(prod);
                  }}>
                  <Trash
                    width={"30px"}
                    height={"30px"}
                    color={"var(--primary-color)"}
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
