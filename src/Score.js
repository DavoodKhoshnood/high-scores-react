import React from 'react'

const Score = (props) => {
return (
            <div key={props.index} className="card">
              <h2>{`HIGH SCORES: ${props.data.name}`}</h2>
              <table className="table">
                <tbody>
                  {props.data.scores.map((player, index) => {
                    return (
                      <tr key={index}>
                        <td>{player.n}</td>
                        <td className="numbers">
                          {parseInt(player.s).toLocaleString()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )

                }

export default Score