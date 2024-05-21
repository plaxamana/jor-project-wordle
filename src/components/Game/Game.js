import React, { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesMade, setGuessesMade] = useState(0);
  const [guessResults, setGuessResults] = useState([]);

  const handleAddGuess = (guessInput) => {
    if (guessesMade === NUM_OF_GUESSES_ALLOWED) return;

    const newGuess = {
      id: crypto.randomUUID(),
      name: guessInput,
    };

    const newGuesses = [...guessResults, newGuess];

    setGuessResults(newGuesses);
    setGuessesMade(guessesMade + 1);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuess={handleAddGuess} />
    </>
  );
}

export default Game;
