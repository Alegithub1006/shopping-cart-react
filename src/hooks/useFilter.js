import { useContext, useEffect, useMemo, useState } from "react";
import { FiltersContext } from "../context/filter";
import { useProducts } from "./useProducts";
//import { useProducts } from "./useProducts";

export function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { product } = useProducts();
  const [prodName, setProdName] = useState();
  const [pagination, setPagination] = useState({ start: 0, end: 21 });

  const localStorage = (state) => {
    window.sessionStorage.setItem("filters", JSON.stringify(state));
  };
  useEffect(() => {
    localStorage(filters);
  }, [filters]);

  const handleNextPage = () => {
    const lastPage = product.length - pagination.end;
    if (pagination.end >= product.length - 1) return;

    lastPage < 20
      ? setPagination((prevState) => ({
          start: (prevState.start += 20),
          end: (prevState.end += lastPage),
        }))
      : setPagination((prevState) => ({
          start: (prevState.start += 20),
          end: (prevState.end += 20),
        }));
  };
  const handlePrevPage = () => {
    if (pagination.start === 0) return;

    setPagination((prevState) => ({
      start: (prevState.start -= 20),
      end: (prevState.end -= 20),
    }));
  };

  const sliceProducts = product.slice(pagination.start, pagination.end);

  const filteredProducts = useMemo(() => {
    return sliceProducts !== undefined
      ? sliceProducts.filter((prod) => {
          return (
            prod.price >= filters.price &&
            (filters.category === "all" ||
              filters.category === prod.category) &&
            prod.rating <= filters.rating &&
            (filters.nameProd === "" || prod.title === filters.nameProd)
          );
        })
      : sliceProducts;
  }, [sliceProducts, filters]);

  const sortedProducts = useMemo(() => {
    return filters.sortName
      ? filters.sortName === "price"
        ? filteredProducts.toSorted((a, b) => {
            return a.price - b.price;
          })
        : filters.sortName === "rating"
          ? filteredProducts.toSorted((a, b) => {
              return a.rating - b.rating;
            })
          : filters.sortName === "name"
            ? filteredProducts.toSorted((a, b) => {
                return a.title.localeCompare(b.title);
              })
            : filteredProducts
      : filteredProducts;
  }, [filteredProducts, filters]);

  const handleFindProduct = (e) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      nameProd: prodName,
    }));
  };

  const handleChangeName = (e) => {
    setProdName(e.target.value);
  };

  const handleSortByValue = (e) => {
    setFilters((prev) => ({
      ...prev,
      sortName: e.target.value,
    }));
    console.log({ filters });
  };

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };
  const hanldeChangeRating = (e) => {
    setFilters((prev) => ({
      ...prev,
      rating: e.target.value,
    }));
  };

  return {
    prodName,
    filters,
    setFilters,
    handleChange,
    handleSortByValue,
    handleFindProduct,
    hanldeChangeRating,
    handleChangeName,
    handleNextPage,
    handlePrevPage,
    filteredProducts,
    sortedProducts,
  };
}
