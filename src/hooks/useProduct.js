import { useContext } from "react";
import { productContext } from "../context/productContext";

export function useProduct() {
  const context = useContext(productContext);

  if (context === undefined) {
    throw new Error("useProduct most be used a productProvider");
  }
  return context;
}
