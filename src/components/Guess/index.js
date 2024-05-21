import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
};

const Guess = ({ guess, answer }) => {
  const yourGuess = checkGuess(guess?.name, answer);

  return (
    <p className="guess">
      {range(5).map((col) => (
        <Cell
          key={col}
          letter={yourGuess ? yourGuess[col].letter : undefined}
          status={yourGuess ? yourGuess[col].status : undefined}
        />
      ))}
    </p>
  );
};

export default Guess;
