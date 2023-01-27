import { useAppDispatch, useAppSelector } from 'app/hooks'
import { processMove } from 'features/gameSlice'
import React from 'react'

function App() {
  const {board} = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  return (
    <div style={{
      display: "grid",
      gap: "2px",
      gridTemplateColumns: "1fr 1fr 1fr"
    }}>
      {board.map((square, i) => <button onClick={() => dispatch(processMove(i))}>
        <h1>{square}</h1>
      </button>)}
    </div>
  )
}

export default App