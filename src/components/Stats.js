import React from 'react';

export function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className='stats'>
        <em>💼 You have no items on your list, and you should add some! 🧳</em>
      </footer>
    );
  }

  const numberOfItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((packedItems / numberOfItems) * 100);

  return (
    <footer className='stats'>
      {percentage === 100 ? "You've packed everything! Ready to go! 🚀" :
        <>
          <em>💼 You have {numberOfItems} items on your list</em>
          <br />
          <em>✅ and  packed {packedItems} out of {numberOfItems} items ({percentage}%)</em>
        </>}
    </footer>
  );
}
