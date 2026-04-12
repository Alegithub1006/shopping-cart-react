import { useId } from "react";
import "../styles/filters.css";

export function FilterBySort({ value, onChange }) {
  const selectFilterSortId = useId();
  return (
    <>
      <select
        id={selectFilterSortId}
        className="filter-sort"
        value={value.sortName}
        onChange={onChange}>
        <option value="">ordenar por</option>
        <option value="rating">rating</option>
        <option value="name">nombre</option>
        <option value="price">precio</option>
      </select>
    </>
  );
}
