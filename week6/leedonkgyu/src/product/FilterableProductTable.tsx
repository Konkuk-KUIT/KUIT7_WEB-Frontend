import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useFilteredProducts } from "./hooks/useFilteredProducts";
import { useToggle } from "./hooks/useToggle";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, toggleInStockOnly] = useToggle(false);
  const { filteredProducts, edit, remove } = useFilteredProducts({
    filterText,
    inStockOnly,
  });

  return (
    <>
      <SearchBar
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={toggleInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        onProductEdit={edit}
        onProductDelete={remove}
      />
    </>
  );
}
