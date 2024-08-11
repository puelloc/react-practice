import { useState } from 'react';
import './Results.css';
import ResultTitle from './ResultTitle.jsx';
import RecommendationSelection from './RecommendationSelection';
import RecommendationView from './RecommendationView';
import './Results.css';
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

const getListItems = (type, model) => {
  switch (type) {
    case Type.MODEL:
      return model;
    case Type.COLUMN:
      return sampleRecommendations;
    default:
      console.log('Unsupported type');
      return [];
  }
};


const Results = ({ type, model, recommendationResponse }) => {
  const [name, setName] = useState('');
  const propertyNames = Object.keys(sampleRecommendations);
  const [dataModel, setDataModel] = useState(model);
  const [recommendationApiResponse, setRecommendationApiResponse] = useState(recommendationResponse);

  return (
    <>
      <div className="result-title"><ResultTitle type={type}/></div>
      <div className="results-container">
        <div className="recommendation-selection">
          <RecommendationSelection ListItems= { getListItems(type, model) } type={type}/>
        </div>
        {true && (
          <div className="recommendation-view">
            <RecommendationView />
          </div>
        )}
      </div>
    </>
  );
}

export default Results;