import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../constants/product";

export function useProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const edit = (id, newProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => ({
        ...prevProduct,
        ...(prevProduct.id === id ? newProduct : {}),
      }))
    );
  };

  const remove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== id)
    );
  };

  return { products, edit, remove };
}
