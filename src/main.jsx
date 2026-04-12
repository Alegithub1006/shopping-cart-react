import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/cartProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProductDetails } from "./components/ProductDetails.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import { Filteredprovider } from "./context/filter.jsx";
import { CartItem } from "./components/CartItem.jsx";
import { PagenotFound } from "./pages/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Filteredprovider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/cart" element={<CartItem />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<PagenotFound />} />
              <Route path="/product/*" element={<PagenotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </Filteredprovider>
  </StrictMode>,
);
