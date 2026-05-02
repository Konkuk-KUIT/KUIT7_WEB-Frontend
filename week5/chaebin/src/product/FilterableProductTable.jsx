import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const INITIAL_PRODUCT_LIST = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function FilterableProductTable() {
    const [filterText, setFilterText] = React.useState("");
    const [inStockOnly, setInStockOnly] = React.useState(false);

    const [products, setProducts] = React.useState(INITIAL_PRODUCT_LIST);
    const handleEdit = (productName, updatedProduct) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => product.name === productName ? updatedProduct : product)
        );
    };

    const handleDelete = (productName) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.name !== productName)
        );
    };


    const filteredProducts = products.filter((product) => {
        const lowerCaseProductName = product.name.toLowerCase();
        const lowerCaseFilterText = filterText.toLowerCase();
        const hasPassedTextFilter = 
            filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);
        const hasPassedStockFilter = !inStockOnly || product.stocked === true;
        return hasPassedTextFilter && hasPassedStockFilter;
    });
    return(
        <>
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable 
            products={filteredProducts} 
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
        </> 
    );
}