import { useCart } from "../hooks/useCart";
import "../styles/cart.css";
import { CartTable } from "./cartTable";

export function CartItem() {
  const {
    cart,
    removeProductFromCart,
    updateQuantityByOne,
    decreeseQuantityByOne,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <section className="cart-section">
      <section className="cart">
        <header className="cart-header">
          <h2 className="cart-header-title">Cart</h2>
          <p className="cart-header-text">
            seleccione los pruductos y la cantidad deseada antes de realizar la
            compra
          </p>
        </header>
        <CartTable
          cart={cart}
          update={updateQuantityByOne}
          decreese={decreeseQuantityByOne}
          remove={removeProductFromCart}
        />
      </section>

      <aside className="cart-summary">
        <h2 className="summary-title">order summary</h2>
        <section className="summary-data">
          <p className="summary-total">Total: </p>
          <p className="summary-total">{totalPrice}</p>
        </section>

        <button
          className="summary-button"
          onClick={() => {
            clearCart();
          }}>
          Clean Cart
        </button>
      </aside>
    </section>
  );
}
