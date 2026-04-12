import { NavBar } from "./components/NavBar";
import { Filters } from "./components/Filters";
import { useFilter } from "./hooks/useFilter";
import { useEffect } from "react";
import { useProducts } from "./hooks/useProducts";
import { ListProducts } from "./components/ListProducts";
import { ListButtons } from "./components/ListButtons";

function App() {
  const { sortedProducts, handleNextPage, handlePrevPage } = useFilter();
  const { getAllProducts, loading, controller, product } = useProducts();

  useEffect(() => {
    if (!product) {
      getAllProducts();
    }

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <NavBar />
      <Filters />
      {loading ? <p>loading...</p> : <ListProducts products={sortedProducts} />}

      <ListButtons
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  );
}

export default App;
