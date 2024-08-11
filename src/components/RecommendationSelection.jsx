import { useState } from 'react';
import VerticalList from './VerticalList';
import './RecommendationSelection.css';
import { Type } from '../constants/Types';

const sampleRecommendations= [
    {
        name: 'Property 1',
        children: []
    },
    {
        name: 'Property 2',
        children: []
    },
    {
        name: 'Property 3',
        children: []
    }
];

const hasChildren = (item) => {
  return item !== null && item.children && item.children.length > 0;
};

const RecommendationSelection = ({ ListItems, type }) => {
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleTableSelected = (item) => {
    setSelectedTable(item);
    setSelectedColumn(null);
    setSelectedProperty(null);
    };
    const handleColumnSelected = (item) => {
    setSelectedColumn(item);
    setSelectedProperty(null);
    };
    const handlePropertySelected = (item) => {
    setSelectedProperty(item);
    //show recommendation
    };

    return (
    <div className="recommendation-selection-view">
       { type === Type.COLUMN &&
          <VerticalList
            items={ListItems}
            selectedItem={selectedProperty}
            onItemSelected={handlePropertySelected}
          />
      }
      { type === Type.MODEL &&
          <VerticalList
            items={ListItems}
            selectedItem={selectedTable}
            onItemSelected={handleTableSelected}
          />
      }
      {  type === Type.MODEL && hasChildren(selectedTable) &&
          <VerticalList
           items={selectedTable.children}
           selectedItem={selectedColumn}
           onItemSelected={handleColumnSelected}
          />
       }
     {  type === Type.MODEL && selectedColumn &&
         <VerticalList
          items={sampleRecommendations}
          selectedItem={selectedProperty}
          onItemSelected={handlePropertySelected}
         />
      }
       {type !== Type.COLUMN && type !== Type.MODEL &&
           <h1>unsupported type</h1>
       }
    </div>
    );
}

export default RecommendationSelection;