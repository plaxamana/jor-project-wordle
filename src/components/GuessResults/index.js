import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessResults = ({ guessResults }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p key={guessResults[row].id} className="guess">
          {range(5).map((col) => (
            <span key={col} className={`cell`}>
              {guessResults[row].name[col]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
