import React, { useState } from "react";

const GuessInput = ({ addGuess }) => {
  const [guess, setGuess] = useState("");

  const handleOnChange = (e) => {
    const guessToUppercase = e.target.value.toUpperCase();
    setGuess(guessToUppercase);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addGuess(guess);
    console.log(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleOnChange}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
};

export default GuessInput;
