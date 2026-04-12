import { useState } from "react";
import { getProducts } from "../services/products";
import { products } from "../mocks/product.json";
import { usePersistedState } from "./usePersistedState";

export function useProducts() {
  const [product, setProduct] = usePersistedState("product", products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const getAllProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const product = await getProducts();
      setProduct(product);
    } catch (e) {
      setError(true);
      throw new Error("Error to fetch: " + e.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    controller,
    product,
    loading,
    error,
    getAllProducts,
  };
}
