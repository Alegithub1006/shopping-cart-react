import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function Filteredprovider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    price: 0,
    rating: 5,
    nameProd: "",
    sortName: "",
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}>
      {children}
    </FiltersContext.Provider>
  );
}
