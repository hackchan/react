export const Board = ({ board, Square, updateBoard }) => {
  return (
    <section className='game'>
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        )
      })}
    </section>
  )
}
