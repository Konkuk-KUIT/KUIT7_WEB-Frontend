import React, {useState} from "react";

export default function ProductRow({ name, price, onDelete, onEdit}) {
  // 사용자가 입력하는 가격과 이름은 state
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({name, price});

  const handleButtonEdit = () => {
    setIsEditing(true);
  };
  const handleButtonSave = () => {
    onEdit(name, editedProduct);
    setIsEditing(false);
  };
  const handleButtonDelete = () => {
    onDelete(name);
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };
  if(isEditing) {
    return (
      <tr>
        <td>
          <input
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
          />
        </td>
        <td>
          <input 
            name="price" 
            value={editedProduct.price}
            onChange={handleChange}/>
        </td>

        <td>
          <button type="button" onClick={handleButtonSave}>✅</button>
          <button type="button" onClick={handleButtonDelete}>🗑️</button>
        </td>
      </tr>
    )
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
