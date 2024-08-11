import './PropertySelectionItem.css';

const VerticalListItem = ({ item, isSelected, onClick }) => {
  return (
    <div
      className={`property-selection-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {item}
    </div>
  );
}

export default VerticalListItem;