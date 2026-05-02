import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { INITIAL_PRODUCT_LIST } from "./constants/product";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  // const [inStockOnly, toggleInStockOnly] = useToggle(false); // 맥락을 잘 드러낼 수가 있음.

  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);
  const handleDeleteProduct = (targetName) => {
    setProducts((prevProducts) => (
      prevProducts.filter((product) => product.name !== targetName)
    ));
  }

  const handleEditProduct = (targetName, editedProduct) => {
    setProducts((prevProducts) => (
      prevProducts.map((product) => (
        product.name === targetName ? {...product, ...editedProduct} : product
      ))
    ))
  }

  const filteredProducts = products.filter((product) => {
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
      <ProductTable 
        products={filteredProducts}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />
    </>
  );
}
