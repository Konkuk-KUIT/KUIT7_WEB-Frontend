import React, { useState } from "react";

export function ProductRowList({ products, ...props }) {
  return products.map((product) => (
    <ProductRow key={product.name} {...product} {...props} />
  ));
}

export default function ProductRow({
  name,
  price,
  stocked,
  category,
  onEditProduct,
  onDeleteProduct,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [product, setProduct] = useState({
    name,
    price,
    stocked,
    category,
  });

  const handleButtonEdit = () => {
    setIsEditing(true);
  };

  const handleButtonSave = () => {
    onEditProduct(name, product);
    setIsEditing(false);
  };

  const handleButtonDelete = () => {
    onDeleteProduct(name);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={product.name}
            onChange={(event) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                name: event.target.value,
              }))
            }
          />
        </td>

        <td>
          <input
            type="text"
            value={product.price}
            onChange={(event) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                price: event.target.value,
              }))
            }
          />
        </td>

        <td>
          <button type="button" onClick={handleButtonSave}>
            ✅
          </button>
          <button type="button" onClick={handleButtonDelete}>
            🗑️
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button type="button" onClick={handleButtonEdit}>
          ✏️
        </button>
        <button type="button" onClick={handleButtonDelete}>
          🗑️
        </button>
      </td>
    </tr>
  );
}
