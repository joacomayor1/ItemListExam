import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, image: 'image1.jpg' },
    { id: 2, name: 'Item 2', price: 20, image: 'image2.jpg' },
    { id: 3, name: 'Item 3', price: 30, image: 'image3.jpg' },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItemFormVisible, setNewItemFormVisible] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', image: '' });

  const handleItemClick = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
  };

  const handleAddItemClick = () => {
    setNewItemFormVisible(true);
  };

  const handleNewItemChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevNewItem) => ({ ...prevNewItem, [name]: value }));
  };

  const handleAddItem = () => {
    const newItemWithId = {
      ...newItem,
      id: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItemWithId]);
    setNewItem({ name: '', price: '', image: '' });
    setNewItemFormVisible(false);
  };

  return (
    <div className="container">
      <div className="left-container">
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <button onClick={handleAddItemClick}>Add New Item</button>
      </div>
      <div className="middle-container">
        {selectedItem ? (
          <div>
            <h2>Item Details</h2>
            <h3>{selectedItem.name}</h3>
            <p>Price: ${selectedItem.price}</p>
            <img src={selectedItem.image} alt={selectedItem.name} />
          </div>
        ) : (
          <p>Please select an item.</p>
        )}
      </div>
      <div className="right-container">
        {newItemFormVisible ? (
          <div>
            <h2>Add New Item</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleNewItemChange}
              />
              <br></br>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={newItem.price}
                onChange={handleNewItemChange}
              />
              <br></br>
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={newItem.image}
                onChange={handleNewItemChange}
              />
              <button type="button" onClick={handleAddItem}>
                Add
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
