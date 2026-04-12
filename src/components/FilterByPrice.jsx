export function FilterByPrice({ value, onChange }) {
  return (
    <>
      <label htmlFor="range">precio</label>
      <input
        className="filter-price"
        id="range"
        type="range"
        value={value.price}
        step={0}
        min={0}
        max={1000}
        onChange={onChange}
      />
      <span>${value.price}</span>
    </>
  );
}
