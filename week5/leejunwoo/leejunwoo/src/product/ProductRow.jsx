import React, {useState} from "react";

export default function ProductRow({ name, price, onDelete}) {
  // 사용자가 입력하는 가격과 이름은 state
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({name, price});

  const handleButtonEdit = () => {
    setIsEditing(true);
  };
  const handleButtonDelete = () => {
    onDelete(name);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>

      <td><button type="button" onClick={handleButtonEdit}>✏️</button>
      <button type="button" onClick={handleButtonDelete}>🗑️</button></td>
    </tr>
  )
}
