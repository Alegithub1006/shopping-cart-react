import { useState } from "react";
import { getProductByID } from "../services/productId";
import productDetails from "../mocks/productDetail.json";

export function useProductID({ id }) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prodDetail, setProdDetail] = useState(productDetails);
  console.log(productDetails);
  const getProductID = async () => {
    try {
      setLoading(true);
      setError(null);

      const productData = await getProductByID({ id });
      window.localStorage.setItem("product-detail", productData);
      setProdDetail(JSON.parse(window.localStorage.getItem("product-detail")));
    } catch (error) {
      setError(error.message);
      setErrorMessage(
        "Error to get product-details: " + error.status + error.message,
      );
      console.log("tomando los producos del mock");
      window.localStorage.setItem(
        "product-detail-default",
        JSON.stringify(productDetails),
      );
      // setProdDetail(
      //   JSON.parse(window.localStorage.getItem("product-detail-default")),
      // );
    } finally {
      setLoading(false);
    }
  };

  if (!id) return null;

  return {
    loading,
    error,
    errorMessage,
    prodDetail,
    getProductID,
  };
}
