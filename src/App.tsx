import { playerVCpu, playerVPlayer } from 'features/gameSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import React from 'react'

function App() {
  const { board, settings, scores } = useAppSelector(state => state)
  const dispatch = useAppDispatch()


  function handleClick(move: number){
    if(settings.against == "player"){
      dispatch(playerVPlayer(move))
    }

    else {
      dispatch(playerVCpu(move))
    }

  }
  
  console.log(scores)

  return (
    <div style={{
      display: "grid",
      gap: "2px",
      gridTemplateColumns: "1fr 1fr 1fr"
    }}>
      {board.map((square, i) => <button onClick={() => handleClick(i)}>
        <h1>{square}</h1>
      </button>)}
    </div>
  )
}

export default App