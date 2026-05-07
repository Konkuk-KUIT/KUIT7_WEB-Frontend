import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../constants/product";

export type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
  id: number;
};

export function useProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const edit = (targetId: number, newProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => ({
        ...prevProduct,
        ...(prevProduct.id === targetId ? newProduct : {}),
      }))
    );
  };

  const remove = (targetId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== targetId)
    );
  };

  return { products, edit, remove };
}
