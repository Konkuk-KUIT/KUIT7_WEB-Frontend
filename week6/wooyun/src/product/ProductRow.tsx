import { useState } from "react";
import type { ProductRowListProps, ProductRowProps } from "./constants/types";

export function ProductRowList({
  products,
  onEdit,
  onDelete,
}: ProductRowListProps) {
  return products.map((product) => (
    <ProductRow
      key={product.id}
      {...product}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));
}

export default function ProductRow({
  id,
  name,
  price,
  onEdit,
  onDelete,
}: ProductRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({ id, name, price });

  const handleButtonEdit = () => {
    setIsEditing(true);
  };

  const handleButtonSave = () => {
    onEdit(id, product);
    setIsEditing(false);
  };

  const handleButtonDelete = () => {
    onDelete(id);
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
              setProduct((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={product.price}
            onChange={(event) =>
              setProduct((prev) => ({ ...prev, price: event.target.value }))
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
