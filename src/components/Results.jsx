import { useState } from 'react';
import './Results.css';
import ResultTitle from './ResultTitle.jsx';
import RecommendationSelection from './RecommendationSelection';
import RecommendationView from './RecommendationView';
import './Results.css';

const Type = {
  COLUMN: 'column',
  MODEL: 'model'
};

const Results = () => {
  const [type, setType] = useState(null);
  const [name, setName] = useState('');
  const [recommendations, setRecommendations] = useState({});
  return (
    <>
        <div className="result-title"><ResultTitle/></div>
        <div className="results-container">
          <div className="recommendation-selection">
            <RecommendationSelection />
          </div>
          <div className="recommendation-view">
            <RecommendationView />
          </div>
        </div>
    </>
  );
}

export default Results;