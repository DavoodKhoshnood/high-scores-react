import allCountryScores from './scores.js'
import HighScore from './HighScore.js'
import './App.css'

function App() {
  return <HighScore scores={allCountryScores} />
}

export default App
