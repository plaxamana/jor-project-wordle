import React, { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [hasGameEnded, setHasGameEnded] = useState(false);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);
  const [guessResults, setGuessResults] = useState([]);

  const handleAddGuess = (guessInput) => {
    if (guessResults.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuess = {
      id: crypto.randomUUID(),
      name: guessInput,
    };

    const newGuesses = [...guessResults, newGuess];
    const isCorrectAnswer = newGuesses.findIndex(
      (guess) => guess.name === answer
    );

    if (isCorrectAnswer > -1) {
      setHasPlayerWon(true);
      setHasGameEnded(true);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setHasGameEnded(true);
    }

    setGuessResults(newGuesses);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />

      {!hasGameEnded ? (
        <GuessInput addGuess={handleAddGuess} />
      ) : (
        <Banner
          hasPlayerWon={hasPlayerWon}
          answer={answer}
          numOfGuesses={guessResults.length}
        />
      )}
    </>
  );
}

export default Game;
