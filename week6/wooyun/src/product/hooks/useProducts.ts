import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../constants/product";
import type { ProductInput, useProductsReturn } from "../constants/types";

export function useProducts(): useProductsReturn {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const edit = (id: number, newProduct: ProductInput) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => ({
        ...prevProduct,
        ...(prevProduct.id === id ? newProduct : {}),
      }))
    );
  };

  const remove = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== id)
    );
  };

  return { products, edit, remove };
}
