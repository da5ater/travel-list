import React from 'react'
import { Stats } from './Stats';
import { PackingList } from './PackingList';
import { Form } from './Form';
import { Logo } from './Logo';

 
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];


function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((prevItems) => prevItems.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }
  
  return (
    <div className='app'>
      <Logo />
      <Form  onAddItem={handleAddItem}/>
      <PackingList  items={items}  onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} setItems={setItems} />
      <Stats items={items} />
    </div>
  )
}

export default App