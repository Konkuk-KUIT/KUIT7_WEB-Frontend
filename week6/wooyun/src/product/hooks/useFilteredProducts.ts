import { useProducts } from "./useProducts";
import type { useFilteredProductsParas, useFilteredProductsReturn } from "../constants/types";

export function useFilteredProducts({ filterText, inStockOnly }: useFilteredProductsParas): useFilteredProductsReturn {
  const { products, edit, remove } = useProducts();

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  return { filteredProducts, edit, remove };
}
