import React, { useId } from "react";

export default function SearchBar({
  filterText,
  onFilterTextChange,
  inStockOnly,
  onInStockOnlyChange,
}) {
  const stockCheckboxId = useId();

  const handleFilterTextChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  const handleStockOnlyChange = (event) => {
    onInStockOnlyChange(event.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <br />
      <label htmlfor={stockCheckboxId}>
        <input
          type="checkbox"
          id={stockCheckboxId}
          checked={inStockOnly}
          onChange={handleStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
