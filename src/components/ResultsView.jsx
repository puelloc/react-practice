import RecommendationSelection from './RecommendationSelection';
import RecommendationView from './RecommendationView';
import './ResultsView.css';

function ResultsView() {
  return (
    <div className="results-container">
      <div className="recommendation-selection">
        <RecommendationSelection />
      </div>
      <div className="recommendation-view">
        <RecommendationView />
      </div>
    </div>
  );
}

export default ResultsView;