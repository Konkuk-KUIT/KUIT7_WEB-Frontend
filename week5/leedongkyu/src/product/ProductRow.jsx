import { useState } from "react";

export function ProductRowList({ products, ...props }) {
  return products.map((product) => (
    <ProductRow key={product.name} {...product} {...props} />
  ));
}

export default function ProductRow({ name, price, category, stocked, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({ name, price, category, stocked });

  const handleButtonEdit = () => {
    setIsEditing(true);
  };

  const handleButtonSave = () => {
    onEdit(name, product);
    setIsEditing(false);
  };

  const handleButtonDelete = () => {
    onDelete(name);
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
          <input
            type="text"
            value={product.category}
            onChange={(event) =>
              setProduct((prev) => ({ ...prev, category: event.target.value }))
            }
          />
        </td>
        <td>
          <label>
            <input
              type="checkbox"
              checked={product.stocked}
              onChange={(event) =>
                setProduct((prev) => ({ ...prev, stocked: event.target.checked }))
              }
            />
            In Stock
          </label>
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
