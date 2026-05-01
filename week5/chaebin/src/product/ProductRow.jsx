import React from "react";

export default function ProductRow({product, onEdit, onDelete}) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedName, setEditedName] = React.useState(product.name);
    const [editedPrice, setEditedPrice] = React.useState(product.price);

    const handleSave = () => {
        onEdit(product.name, {...product, name: editedName, price: editedPrice});
        setIsEditing(false);
    }

    if (isEditing){
        return (
            <tr>
                <td>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(event) => setEditedName(event.target.value)}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={editedPrice}
                        onChange={(event) => setEditedPrice(event.target.value)}
                    />
                </td>
                <td>
                    <button type="button" onClick={handleSave}>✅</button>
                    <button type="button" onClick={() => onDelete(product.name)}>🗑️</button>
                </td>
            </tr>
        )
    }

    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button type="button" onClick={() => setIsEditing(true)}>✏️</button>
                <button type="button" onClick={() => onDelete(product.name)}>🗑️</button>
            </td>
        </tr>
    );
}