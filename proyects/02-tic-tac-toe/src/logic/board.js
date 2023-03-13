
import { WINNER_COMBOS } from '../constants'

export const checkWinner = (board) => {
  for (const combo in WINNER_COMBOS) {
    const [a, b, c] = WINNER_COMBOS[combo]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkEnd = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
