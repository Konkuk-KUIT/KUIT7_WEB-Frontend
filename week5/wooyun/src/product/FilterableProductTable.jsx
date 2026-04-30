import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const INITIAL_PRODUCT_LIST = [
  {
    id: 1,
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Apple",
  },
  {
    id: 2,
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Dragonfruit",
  },
  {
    id: 3,
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
  },
  {
    id: 4,
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
  },
  {
    id: 5,
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
  },
  {
    id: 6,
    category: "Vegetables",
    price: "$1",
    stocked: true,
    name: "Peas",
  },
];

export function FilterableProductTable() {
  const [newproducts, setnewproducts] = useState(INITIAL_PRODUCT_LIST);
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleDeleteProduct = (productId) => {
    setnewproducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  };

  const handleEditingProduct = (productId, newname) => {
    setnewproducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, name: newname } : product,
      ),
    );
  };

  const filteredProducts = newproducts.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
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
        onDeleteProduct={handleDeleteProduct}
        onEditingProduct={handleEditingProduct}
      />
    </>
  );
}
