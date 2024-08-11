import VerticalList from './VerticalList';
import './RecommendationSelection.css';


const RecommendationSelection = ({ListItems}) => {
  return (
    <div className="recommendation-selection-view">
        <VerticalList items={ListItems} />
    </div>
  );
}
export default RecommendationSelection;