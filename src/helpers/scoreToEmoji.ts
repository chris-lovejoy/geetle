import { GuessType } from "../types/guess";

export function scoreToEmoji(guesses: GuessType[], gameMode: string): string {
  const emojis = {
    incorrect: "⭕",
    correctMasti: "🟢",
    correctUstaad: "🟣",
    skip: "⚫️",
    empty: "⚪️",
  };
  const todaysDate = new Date();

  let prefix = "";

  if (gameMode === "Masti") {
    prefix += `Geetle - ${todaysDate.toLocaleDateString()}
  Masti Mode: 🎧`;
  } else if (gameMode === "Ustaad") {
    prefix += `Geetle - ${todaysDate.toLocaleDateString()}
  Ustaad Mode: 🎧`;
  }

  let scoreEmoji = "";
  let numGuesses = 0;

  guesses.forEach((guess: GuessType) => {
    numGuesses += 1;
    if (guess.isCorrect === true) {
      if (gameMode === "Masti") {
        scoreEmoji += emojis.correctMasti;
      } else if (gameMode === "Ustaad") {
        scoreEmoji += emojis.correctUstaad;
      }
    } else if (guess.skipped === true) {
      scoreEmoji += emojis.incorrect;
    } else if (guess.isCorrect === false) {
      scoreEmoji += emojis.incorrect;
    } else {
      scoreEmoji += emojis.empty;
    }
  });

  if (numGuesses < 6) {
    scoreEmoji += emojis.empty;
  }

  return `${prefix} ${scoreEmoji}`;
}
