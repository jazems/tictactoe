import Board from "./Board";
import Result from "./Result";
import { useState, useEffect } from "react";

/* Calculates winner based on square values. */
function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.filter(Boolean).length === 9) {
    return "Draw";
  }

  return null;
}

/* Renders Score component and one of either Board or Result components based on defined states. */
const Game = () => {
  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [score, setScore] = useState([0, 0]);

  /** Sets a square to its player value "X" or "O" based on whose turn it is. */
  const handleClick = (id: number) => {
    if (squares[id] != null) {
      return;
    }

    const newSquares = squares.map((_, i) => {
      if (i === id) {
        return turn;
      } else {
        return _;
      }
    });

    setSquares(newSquares);
    setTurn(turn === "X" ? "O" : "X");
  };

  /* Resets every state besides the score, so board component re-renders. */
  const handleReset = () => {
    setWinner(null);
    setSquares(Array(9).fill(null));
    setTurn("X");
  };

  const handleResetScore = () => {
    setScore([0, 0]);
  };

  /* If there is a winner, this hook updates the winner and score state. */
  useEffect(() => {
    if (winner) {
      return;
    }

    let winnerName = calculateWinner(squares);

    if (winnerName) {
      setWinner(winnerName);
      if (winnerName !== "Draw") {
        let newScore = score;
        let winnerID = winnerName === "X" ? 0 : 1;
        newScore[winnerID] = newScore[winnerID] + 1;
        setScore(newScore);
      }
    }
  });

  return (
    <div className="gameContainer">
      <div className="score">
        <span className="p1"> {score[0]}</span> - <span className="p2"> {score[1]}</span>
      </div>
      {!winner && <Board onClick={handleClick} board={squares} turn={turn} />}
      {winner && <Result winner={winner} reset={handleReset} resetScore={handleResetScore} />}
    </div>
  );
};

export default Game;
