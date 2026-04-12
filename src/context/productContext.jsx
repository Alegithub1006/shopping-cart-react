//import { createContext, useState } from "react";
import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";

export const productContext = createContext();

export function ProductProvider({ children }) {
  const { product, setProduct, getAllProducts, error, loading } = useProducts();

  return (
    <productContext.Provider
      value={{
        product: product,
        setProduct,
        getAllProducts,
        error,
        loading,
      }}>
      {children}
    </productContext.Provider>
  );
}
