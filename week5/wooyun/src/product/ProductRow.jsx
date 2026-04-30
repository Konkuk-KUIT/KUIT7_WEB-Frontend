import React, { useState } from "react";

export default function ProductRow({ id, name, price, onDeleteProduct, onEditingProduct }) {
    
    const [isEditing, setisEditing] = useState(false);
    const [editedname, seteditedname] = useState("");
    
    const handleEditclick = () => {
        seteditedname("");
        setisEditing(true);
    }

    const handleEditing = () => {
        onEditingProduct(id, editedname);
        setisEditing(false);
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleEditing();
        }
    }

    return (
    <tr>
      <td>
        {isEditing ? (
            <input
                type="text"
                value={editedname}
                placeholder={name}
                onChange={(event) => seteditedname(event.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
        ) : (
            name
        )}
      </td>
      <td>{price}</td>
      <td>
        <button onClick={handleEditclick}>수정</button>
        <button onClick={() => onDeleteProduct(id)}>삭제</button>
      </td>
      
    </tr>
  );
}
