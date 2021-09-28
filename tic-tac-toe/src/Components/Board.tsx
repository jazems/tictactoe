import Square from "./Square";

/* Container component for 9 squares. */
const Board = (props: any) => {
  return (
    <div className="">
      <div className={`turn ${props.turn === "X" ? "p1" : "p2"}`}>
        {props.turn === "X" ? "Player 1" : "Player 2"}
      </div>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((value, id) => (
            <Square key={id} onClick={() => props.onClick(id)} value={props.board[id]} />
          ))}
      </div>
    </div>
  );
};

export default Board;
