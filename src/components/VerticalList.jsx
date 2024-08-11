// src/components/VerticalList.jsx
import { useState } from 'react';
import VerticalListItem from './VerticalListItem';
import './VerticalList.css';

const VerticalList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="vertical-list">
      {items.map((item, index) => (
        <VerticalListItem
          key={index}
          item={item}
          isSelected={item === selectedItem}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
}

export default VerticalList;