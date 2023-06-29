import React from 'react';

const ItemDetails = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div>No item selected</div>;
  }

  const { name, price, image } = selectedItem;

  return (
    <div>
      <h2>Item Details</h2>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
