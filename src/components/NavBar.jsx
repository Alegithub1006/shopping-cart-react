import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { useId } from "react";
import { useFilter } from "../hooks/useFilter";
import "../styles/navBar.css";
import { Box, Cart, Search } from "./Icons";

export function NavBar() {
  const { prodName, handleChangeName, handleFindProduct } = useFilter();
  const { totalProducts } = useCart();
  const searchInput = useId();
  return (
    <nav className="nav-bar">
      <header className="nav-bar-header">
        <Box width={"50px"} height={"50px"} />
        <h1>MiniShop</h1>
      </header>

      <aside className="nav-bar-aside">
        <form className="input-search" onSubmit={handleFindProduct}>
          <label className="label" htmlFor={searchInput}>
            <Search width={"20px"} height={"20px"} />
            <input
              className="input"
              onChange={handleChangeName}
              id={searchInput}
              name="product-name"
              type="text"
              placeholder="buscar producto..."
              value={prodName}
            />
          </label>

          <button className="input-button" type="submit">
            <Search width={"25px"} height={"25px"} />
          </button>
        </form>

        <Link className="cart-link" to={"/cart"}>
          <div className="cart-container">
            <Cart width={"40px"} height={"40px"} />
            <div className="cart-items">
              <p>{totalProducts}</p>
            </div>
          </div>
        </Link>
      </aside>
    </nav>
  );
}
