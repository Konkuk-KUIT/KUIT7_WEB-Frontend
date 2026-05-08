import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onEdit, onDelete }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category,
  );
  const productByCategory = Object.entries(productTableByCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productByCategory.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow
                key={product.name}
                {...product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
