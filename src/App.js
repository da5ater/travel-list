import React from 'react'

 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function Logo() {
  return (
    <h1 className='logo'>🏝️ Far away</h1>
  )
}

function Form({ onAddItem }) {
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
    }

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
      <input type="text" placeholder='Item...'  value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>➕</button>
    </form>
  )
}

function PackingList({ items , onDeleteItem}) {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.description}
      </span>
      <span> {item.quantity}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className='stats'>
      <em>💼 You have 0 items on your list, and you should add some! 🧳</em>
    </footer>
  )
}

function App() {
  const [items, setItems] = React.useState(initialItems);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  
  return (
    <div className='app'>
      <Logo />
      <Form  onAddItem={handleAddItem}/>
      <PackingList  items={items}  onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  )
}

export default App