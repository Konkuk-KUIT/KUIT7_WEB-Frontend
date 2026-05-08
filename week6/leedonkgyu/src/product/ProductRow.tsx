import { useState } from "react";
import { type Product } from "./hooks/useProducts";

interface ProductRowProps {
  products: Product[];
  onEdit: (id: number, product: Product) => void;
  onDelete: (id: number) => void;
}

export function ProductRowList({ products, ...props }: ProductRowProps) {
  return products.map((product) => (
    <ProductRow key={product.id} {...product} {...props} />
  ));
}

export default function ProductRow({ id, name, price, category, stocked, onEdit, onDelete } : Product & Omit<ProductRowProps, "products">) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({ id, name, price, category, stocked });

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
