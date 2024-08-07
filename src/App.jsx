import './App.css'
import RecommenderInput from './components/RecommenderInput'
import Results from './components/Results'
import { useState } from 'react'

function App() {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(!showResults);
  }

  return (
      <div className="page">
          <div className={`input ${!showResults ? 'centered' : ''}`}>
              <RecommenderInput onSearch={handleSearch} />
          </div>
          <div className={`result ${!showResults ? 'hidden' : ''}`}>
              {showResults && <Results />}
          </div>
      </div>
  )
}

export default App