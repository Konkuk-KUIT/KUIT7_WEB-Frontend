import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { INITIAL_PRODUCT_LIST } from "./constants/product";

function getProductsByCategory(products) {
  const productsByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );

  return productsByCategory;
}

export default function ProductTable({
  products,
  onDelete
}) {
    const productsByCategory = Object.entries(getProductsByCategory(products));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsByCategory.map(([category, products]) => (
            <React.Fragment key={category}>
              <ProductCategoryRow category={category}/>
              {products.map((product) => (
                <ProductRow 
                  key={product.name}
                  {...product}
                  onDelete={onDelete}
                  />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
}
