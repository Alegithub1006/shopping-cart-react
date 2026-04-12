export function FilterByCategory({ onChange }) {
  return (
    <>
      <select
        className="filter-category"
        onChange={onChange}
        defaultValue="all">
        <option value="">Categoria</option>
        <option value="all">all</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
        <option value="groceries">groceries</option>
        <option value="home-decoration">home-decoration</option>
        <option value="kitchen-accessories">kitchen-accessories</option>
        <option value="laptops">laptops</option>
        <option value="mens-shirts">mens-shirts</option>
        <option value="mens-watches">mens-watches</option>
        <option value="mobile-accessories">mobile-accessories</option>
        <option value="motorcycle">motorcycle</option>
        <option value="smartphones">smartphones</option>
        <option value="sports-accessories">sports-accessories</option>
      </select>
    </>
  );
}
