import { useState } from 'react';
import VerticalListItem from './VerticalListItem';
import './VerticalList.css';

const VerticalList = ({ items, selectedItem, onItemSelected }) => {
  const handleItemClick = (item) => {
    onItemSelected(item);
  };

  return (
    <div className="vertical-list">
      {items.map((item, index) => (
        <VerticalListItem
          key={index}
          item={item.name}
          isSelected={item === selectedItem} // Check if the item is selected
          onClick={() => handleItemClick(item)} // Handle item click
        />
      ))}
    </div>
  );
}

export default VerticalList;