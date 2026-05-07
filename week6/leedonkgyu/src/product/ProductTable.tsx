import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import { ProductRowList } from "./ProductRow";
import { type Product } from "./hooks/useProducts";

function getProductsByCategory(products: Product[]) {
  return Object.groupBy(products, (product) => product.category);
}

export default function ProductTable({
  products,
  onProductEdit,
  onProductDelete,
}: {
  products: Product[];
  onProductEdit: (id: number, product: Product) => void;
  onProductDelete: (id: number) => void;
}) {
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
              products={products ?? []}
              onEdit={onProductEdit}
              onDelete={onProductDelete}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
