export async function getProductByID({ id }) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    const product = data;

    return product;
  } catch (err) {
    throw new Error("Error to get product details: " + err.message);
  }
}
