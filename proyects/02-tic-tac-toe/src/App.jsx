import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEnd, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index'
function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board] // structuredClone
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    if (newWinner) {
      confetti()
      setWinner(newWinner)
      // alert(`el ganador es ${newWinner}`)
    } else if (checkEnd(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorage()
  }
  return (
    <main className='board'>
      <h1>Triki</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} Square={Square} updateBoard={updateBoard} />
      {/* <section className='game'>
          {board.map((square, index)=>{
            return (
              <Square key={index} index={index}  updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })}
         </section> */}

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} Square={Square} />

    </main>

  )
}

export default App
