export async function getProducts() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products/?limit=0&delay=2000",
    );
    const data = await res.json();
    const product = data.products;

    return product?.map((p) => ({
      ID: p.id,
      title: p.title,
      category: p.category,
      price: p.price,
      rating: p.rating,
      stock: p.stock,
      tags: p.tags,
      reviews: p.reviews,
      image: p.image,
    }));
  } catch (err) {
    throw new Error("Error to get products: " + err.message);
  }
}
