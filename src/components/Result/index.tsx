import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  gameMode: string;
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  gameMode,
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );
  
  const textForTryMasti = [
    "Jo jeeta wohi sikander",
    "Where’s the party tonight?",
    "It’s the time to disco",
    "All izz well",
    "Hum Kisi Se Kam Nahi",
    "Kar har maidan fateh",
  ];
  const textForTryUstaad = [
    "Ustaadon ke ustaad",
    "Where’s the party tonight?",
    "It’s the time to disco",
    "All izz well",
    "Hum Kisi Se Kam Nahi",
    "Kar har maidan fateh",
  ];

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const triesConjugation = currentTry === 1 ? "attempt" : "attempts";

    return (
      <>
        {gameMode == "Ustaad" && (
          <Styled.ResultTitle>
            {textForTryUstaad[currentTry - 1]}
          </Styled.ResultTitle>
        )}
        {gameMode == "Masti" && (
          <Styled.ResultTitle>
            {textForTryMasti[currentTry - 1]}
          </Styled.ResultTitle>
        )}
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.movie} - {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          You guessed it with {currentTry} {triesConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy the result
        </Button>
        <Styled.TimeToNext>
          Come back tomorrow to try again - the song will be updated in:{" "}
          {hoursToNextDay} hours!
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Unfortunately not...</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.movie} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.TimeToNext>
          Come back tomorrow to try again - the song will be updated in:{" "}
          {hoursToNextDay} hours!
        </Styled.TimeToNext>
      </>
    );
  }
}
