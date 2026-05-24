import React from 'react';

export function Form({ onAddItem }) {
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    if (quantity < 1) return;

    const item = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };

    onAddItem(item);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> what do you need for your trip? 😘</h3>
      <select name="quantity" className='quantity' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>➕</button>
    </form>
  );
}
