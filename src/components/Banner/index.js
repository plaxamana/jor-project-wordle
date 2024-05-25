import React from "react";

const Banner = ({ hasPlayerWon, answer, numOfGuesses }) => {
  return (
    <div className={`banner ${hasPlayerWon ? "happy" : "sad"}`}>
      <p>
        {hasPlayerWon ? (
          <>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
};

export default Banner;
