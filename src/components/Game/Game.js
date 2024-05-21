import React, { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let initGuesses = [];

for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
  initGuesses.push({ id: crypto.randomUUID(), name: "" });
}

function Game() {
  const [guessesMade, setGuessesMade] = useState(0);
  const [guessResults, setGuessResults] = useState(initGuesses);

  const handleAddGuess = (guess) => {
    if (guessesMade === NUM_OF_GUESSES_ALLOWED) return;

    const guessCount = guessesMade;
    const newGuesses = [...guessResults];
    const newGuess = {
      ...newGuesses[guessCount],
      name: guess,
    };

    newGuesses[guessCount] = newGuess;

    console.log('checkGuess: ',checkGuess(guess, answer));

    setGuessResults(newGuesses);
    setGuessesMade(guessesMade + 1);
  };

  console.log("guessResults: ", guessResults);
  console.log("guessCount: ", guessesMade);

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput addGuess={handleAddGuess} answer={answer} />
    </>
  );
}

export default Game;
