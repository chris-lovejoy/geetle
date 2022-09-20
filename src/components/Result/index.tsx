import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";
import { playTimes } from "../../constants";

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
  const textForFailMasti = "Apna time aayega";
  const textForFailUstaad = "Haar kar jeetne wale ko baazigar kehte hai";

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const secondsConjugation = currentTry === 1 ? "second" : "seconds";

    return (
      <>
        {gameMode == "Masti" && (
          <Styled.ResultTitle>
            {textForTryMasti[currentTry - 1]}
          </Styled.ResultTitle>
        )}
        {gameMode == "Ustaad" && (
          <Styled.ResultTitle>
            {textForTryUstaad[currentTry - 1]}
          </Styled.ResultTitle>
        )}
        <Styled.SongTitle>
          Well done!
          {/* Today&apos;s song is {todaysSolution.movie} - {todaysSolution.name} */}
        </Styled.SongTitle>
        <Styled.Tries>
          You correctly guessed today&apos;s Geetle in{" "}
          {playTimes[currentTry - 1] / 1000} {secondsConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy the result
        </Button>
        <Styled.TimeToNext>
          Come back in {hoursToNextDay} hours to play again!
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        {gameMode == "Masti" && (
          <Styled.ResultTitle>{textForFailMasti}</Styled.ResultTitle>
        )}
        {gameMode == "Ustaad" && (
          <Styled.ResultTitle>{textForFailUstaad}</Styled.ResultTitle>
        )}
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
