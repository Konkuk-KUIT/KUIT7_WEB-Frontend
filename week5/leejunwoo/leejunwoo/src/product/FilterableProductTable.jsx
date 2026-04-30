import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useFilteredProducts } from "./hooks/useFilteredProducts";
import { useToggle } from "./hooks/useToggle";
import { INITIAL_PRODUCT_LIST } from "./constants/product";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  // const [inStockOnly, toggleInStockOnly] = useToggle(false); // 맥락을 잘 드러낼 수가 있음.

  const filteredProducts = INITIAL_PRODUCT_LIST.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedStockFilter = 
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);
    const hasPassedTextFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={filteredProducts}/>
    </>
  );
}
