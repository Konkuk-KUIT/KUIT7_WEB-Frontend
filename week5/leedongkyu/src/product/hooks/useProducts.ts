import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../constants/product";

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export function useProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const edit = (targetName: string, newProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => ({
        ...prevProduct,
        ...(prevProduct.name === targetName ? newProduct : {}),
      }))
    );
  };

  const remove = (targetName: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.name !== targetName)
    );
  };

  return { products, edit, remove };
}
