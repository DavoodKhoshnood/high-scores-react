import React, { useState } from 'react'

import Score from './Score'
import allScores from './scores.js'
import './App.css'

const HighScores = () => {
  const [scores, setScores] = useState(allScores)
  const [isSortedByName, setIsSortedByName] = useState(true)
  const [isSortedByScore, setIsSortedByScore] = useState(true)
  const sortByName = () => {
    isSortedByName
      ? setScores(scores.sort((a, b) => b.name.localeCompare(a.name)))
      : setScores(scores.sort((a, b) => a.name.localeCompare(b.name)))
    setIsSortedByName(!isSortedByName)
  }
  const sortByScore = () => {
    isSortedByScore
      ? setScores(
          scores.map((sc) =>
            sc.scores.sort((a, b) => {
              return parseInt(a.s) - parseInt(b.s)
            }),
          ),
        )
      : setScores(
          scores.map((sc) =>
            sc.scores.sort((a, b) => {
              return parseInt(b.s) - parseInt(a.s)
            }),
          ),
        )

    setIsSortedByScore(!isSortedByScore)
  }

  return (
    <>
      <header className="App-header">
        <h1> High Scores per Country</h1>
      </header>
      <div className="d-flex flex-lg-row center p-2">
        <button className="btn btn-success m-2" onClick={sortByName}>
          Sort By Name
        </button>
        <button className="btn btn-success m-2" onClick={sortByScore}>
          Sort By Score
        </button>
      </div>
      <div className="container center">
        {[...scores].map((score, index) => (
          <Score data={score} index={index} />
        ))}
      </div>
    </>
  )
}

export default HighScores
