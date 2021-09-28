/* Returns desired JSX if winner exists. */
function win(winner: string) {
  return <>{winner} won!</>;
}

/* Returns desired JSX if game ends in draw. */
function draw() {
  return <>Draw.</>;
}

/* Renders result of game and reset button. */
const Result = (props: any) => {
  let isDraw = props.winner === "Draw" ? true : false;

  return (
    <div>
      <p>{!isDraw && win(props.winner)} </p>
      <p>{isDraw && draw()}</p>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

export default Result;
