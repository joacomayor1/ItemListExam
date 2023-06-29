import React from 'react';

const ItemList = ({ items, onItemClick }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemClick(item)}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
