import Square from "./Square";

/* Container component for 9 squares. */
const Board = (props: any) => {
  return (
    <div className="board">
      {Array(9)
        .fill(null)
        .map((value, id) => (
          <Square key={id} onClick={() => props.onClick(id)} value={props.board[id]} />
        ))}
    </div>
  );
};

export default Board;
