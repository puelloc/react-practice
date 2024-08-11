import './App.css'
import RecommenderInput from './components/RecommenderInput'
import Results from './components/Results'
import { useState } from 'react'
import { Type } from './constants/Types';

const sampleModel = [
    {
        name: 'table1',
        children: [{name: 'column1',}, {name: 'column2'}]
    },
    {
        name: 'table2',
        children: [{name: 'column3',}, {name: 'column4'}]
    },
    {
        name: 'table3',
        children: [{name: 'column5',}, {name: 'column6'}]
    },
    {
        name: 'table4',
        children: [{name: 'column7',}, {name: 'column8'}]
    },
]

const sampleColumnRecommendationResponse = {
    name: 'columnName',
    recommendations: [
        {id: 0, name: 'Recommended Column 1', property1: 'value1', property2: 'value2'},
        {id: 1, name: 'Recommended Column 2', property1: 'value1', property2: 'value2'},
        {id: 2, name: 'Recommended Column 3', property1: 'value1', property2: 'value2'},
    ]
}

function App() {
  const [showResults, setShowResults] = useState(false);
  const [type, setType] = useState('');
  const [model, setModel] = useState(null);
  const [recommendationResponse, setRecommendationResponse] = useState(null);

  const handleSubmit = (selectedType) => {
    switch (selectedType) {
      case Type.MODEL:
        setModel(sampleModel);
        setRecommendationResponse(null);
        setType(Type.MODEL);
        break;
      case Type.COLUMN:
        setModel(null);
        setRecommendationResponse(sampleColumnRecommendationResponse);
        setType(Type.COLUMN);
        break;
      default:
        console.log('Unsupported type');
        break;
    }
    setShowResults(!showResults);
  }

  return (
      <div className="page">
          <div className={`input ${!showResults ? 'centered' : ''}`}>
              <RecommenderInput onSubmit={handleSubmit} />
          </div>
          <div className={`result ${!showResults ? 'hidden' : ''}`}>
              {showResults && <Results type={type} model={model} recommendationResponse={recommendationResponse}/>}
          </div>
      </div>
  )
}

export default App