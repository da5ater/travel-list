import React from 'react';

export function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onTogglePacked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <span> {item.quantity}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
