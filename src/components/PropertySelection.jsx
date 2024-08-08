import PropertySelectionItem from './PropertySelectionItem';

function PropertySelection() {
  const items = ['Item 1', 'Item 2', 'Item 3']; // Example items

  return (
    <>
      {items.map((item, index) => (
        <PropertySelectionItem key={index} />
      ))}
    </>
  );
}

export default PropertySelection;