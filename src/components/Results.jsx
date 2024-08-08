import './Results.css';
import ResultTitle from './ResultTitle.jsx';
import ResultsView from './ResultsView.jsx';

const Results = () => {
  return (
    <>
        <div className="result-title"><ResultTitle/></div>
        <div className="results-view"><ResultsView/></div>
    </>
  );
}

export default Results;