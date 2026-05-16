import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import { ProductRowList } from "./ProductRow";
import type { Product, ProductTableProps } from "./constants/types";

function getProductsByCategory(products: Product[]) {
  const productsByCategory: Record<string, Product[]> = {};

  for (const product of products) {
    if(!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }

    productsByCategory[product.category].push(product);
  }

  return productsByCategory;
}

export default function ProductTable({
  products,
  onProductEdit,
  onProductDelete,
}: ProductTableProps) {
  const productsByCategory = getProductsByCategory(products);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(productsByCategory).map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            <ProductRowList
              products={products}
              onEdit={onProductEdit}
              onDelete={onProductDelete}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
