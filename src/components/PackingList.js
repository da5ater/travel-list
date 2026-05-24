import React from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItem, onTogglePacked, setItems }) {

  const [sortBy, setSortBy] = React.useState("input");

  let sortedItems = [...items];
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => a.packed - b.packed);
  } else if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onTogglePacked={onTogglePacked} />
        ))}
      </ul>


      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Description</option>
          <option value="packed">Packed</option>
          <option value="description">Description</option>
        </select>
        <button onClick={() => setItems([])}>Clear list ❌</button>
      </div>

    </div>
  );

}
