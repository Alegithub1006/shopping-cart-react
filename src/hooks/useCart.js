import { useContext } from "react";
import { cartContext } from "../context/cartProvider";

export function useCart() {
  const context = useContext(cartContext);

  if (context === undefined) {
    throw new Error("useCart most be used a cartProvider");
  }
  return context;
}
