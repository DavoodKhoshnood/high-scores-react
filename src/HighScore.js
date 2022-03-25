import React from 'react'
import './App.css'

const HighScores = (props) => {
  console.log(props.scores)
  return (
      <>
    <header className='App-header'>
    <h1> High Scores per Country</h1>
    </header> 
    <div className='container center'>
      {props.scores.map((score) => {
        return (
          <div className='card'>
            <h2>{`HIGH SCORES: ${score.name}`}</h2>
            <table className='table'>
              <tbody>
                {score.scores.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{player.n}</td>
                      <td className='numbers'>{parseInt(player.s).toLocaleString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default HighScores
