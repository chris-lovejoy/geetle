import React from "react";
import { FcShare } from "react-icons/fc";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";

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

  const minsToNextDay = Math.floor(
    ((new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60) %
      60
  );

  const textForTryMasti = [
    "Jo Jeeta Wohi Sikander!",
    "Where’s The Party Tonight?!",
    "It’s The Time To Disco!",
    "All Izz Well!",
    "Hum Kisi Se Kam Nahi!",
    "Kar Har Maidan Fateh!",
  ];
  const textForTryUstaad = [
    "Ustaadon Ke Ustaad!",
    "Where’s The Party Tonight?!",
    "It’s The Time To Disco!",
    "All Izz Well!",
    "Hum Kisi Se Kam Nahi!",
    "Kar Har Maidan Fateh!",
  ];
  const textForFailMasti = "Apna Time Aayega!";
  const textForFailUstaad = "Haar Kar Jeetne Wale Ko BAAZIGAR Kehte Hai!";

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const secondsConjugation = currentTry === 1 ? "second" : "seconds";

    return (
      <>
        <Styled.GeetlePlayer>
          <CircularInput value={8 / 16}>
            {/* TODO: update input time to the number of 
            guesses they took based on currentTry */}
            <CircularTrack />
            <CircularProgress stroke="#2C3088" />
            <line x1={100} x2={100} y1={-10} y2={10} stroke="#2C3088" />
            <line x1={143} x2={135} y1={-1} y2={17} stroke="#2C3088" />
            <line x1={180} x2={166} y1={25} y2={38} stroke="#2C3088" />
            <line x1={190} x2={210} y1={100} y2={100} stroke="#2C3088" />
            <line x1={143} x2={135} y1={201} y2={183} stroke="#2C3088" />
            <line x1={-1} x2={17} y1={143} y2={135} stroke="#2C3088" />
          </CircularInput>
          <Styled.GeetleLogo>
            <FcShare size={130} />
            {/* TODO: add click leading to share */}
            {/* <img
              src={geetleLogo}
              height="150"
              style={{ cursor: "pointer" }}
              onClick={startPlayback}
            /> */}
          </Styled.GeetleLogo>
        </Styled.GeetlePlayer>

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
          Well Done!
          {/* Today&apos;s song is {todaysSolution.movie} - {todaysSolution.name} */}
        </Styled.SongTitle>
        <Styled.Tries>
          You correctly guessed today&apos;s Geetle in{" "}
          {playTimes[currentTry - 1] / 1000} {secondsConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Share your result
        </Button>
        <Styled.TimeToNext>
          Come back in {hoursToNextDay} hours and {minsToNextDay} minutes to
          play again!
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
          Come back tomorrow to try again - the song will be updated in{" "}
          {hoursToNextDay} hours and {minsToNextDay} minutes!
        </Styled.TimeToNext>
      </>
    );
  }
}
