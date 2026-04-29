import React, { useState } from "react";

export default function ProductRow({ id, name, price, onDeleteProduct }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => onDeleteProduct(id)}>삭제</button>
            </td>
        </tr>
    );
}