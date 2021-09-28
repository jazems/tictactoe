/* Returns desired JSX if winner exists. */
function win(winner: string) {
  return (
    <>
      <span className={winner === "X" ? "p1" : "p2"}>
        {winner === "X" ? "Player 1" : "Player 2"} Won!
      </span>
    </>
  );
}

/* Returns desired JSX if game ends in draw. */
function draw() {
  return (
    <>
      <div className="draw">Draw!</div>
    </>
  );
}

/* Renders result of game and reset button. */
const Result = (props: any) => {
  let isDraw = props.winner === "Draw" ? true : false;

  return (
    <div className="result">
      <p>{!isDraw && win(props.winner)} </p>
      <p>{isDraw && draw()}</p>
      <button className="reset" onClick={props.reset}>
        Play Again!
      </button>
      <br />
      <button className="resetScore" onClick={props.resetScore}>
        Reset Score
      </button>
    </div>
  );
};

export default Result;
