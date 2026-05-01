import React, { useState } from "react";

export default function ProductRow({ name, price, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({ name, price });
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯

  const handleButtonEdit = () => {
    setIsEditing(true);
  };

  const handleButtonSave = () => {
    onEdit(name, product);
    setIsEditing(false);
  };

  const handleButtonDelete = () => {
    onDelete(name);
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            value={product.name}
            onChange={(event) =>
              setProduct({ ...product, name: event.target.value })
            }
          />
        </td>
        <td>
          <input
            value={product.price}
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
          />
        </td>
        <td>
          <button type="button" onClick={handleButtonSave}>
            저장
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
