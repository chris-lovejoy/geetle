import React from "react";
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
import shareLogo from "../../assets/shareLogo.png";
import twitterLogo from "../../assets/twitterLogo.png";
import instagramLogo from "../../assets/instagramLogo.png";

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
    "Dhoom Machale!",
    "Dil Bole Hadippa!",
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
  const textForFailUstaad = "Picture Abhi Baaki Hai Mere Dost!";

  const openTwitter = () => {
    window.open(
      "https://twitter.com/Geetle_app?t=mmkw6oUqH31eYoqfNMG_sg&s=08",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/geetle_app?r=nametag", "_blank");
  };

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      alert("Score copied to clipboard");
      navigator.clipboard.writeText(scoreToEmoji(guesses, gameMode));
    }, [guesses]);

    const secondsConjugation = currentTry === 1 ? "second" : "seconds";

    return (
      <>
        <Styled.GeetlePlayer>
          <CircularInput value={playTimes[currentTry - 1] / 16000}>
            <CircularTrack />
            <CircularProgress stroke="#2C3088" strokeLinecap="butt" />
            <line x1={100} x2={100} y1={-10} y2={10} stroke="#2C3088" />
            <line x1={143} x2={135} y1={-1} y2={17} stroke="#2C3088" />
            <line x1={180} x2={166} y1={25} y2={38} stroke="#2C3088" />
            <line x1={190} x2={210} y1={100} y2={100} stroke="#2C3088" />
            <line x1={143} x2={135} y1={201} y2={183} stroke="#2C3088" />
            <line x1={-1} x2={17} y1={143} y2={135} stroke="#2C3088" />
          </CircularInput>
          <Styled.GeetleLogo>
            <img
              src={shareLogo}
              height="120"
              style={{ cursor: "pointer" }}
              onClick={copyResult}
            />
          </Styled.GeetleLogo>
        </Styled.GeetlePlayer>
        <Styled.Social>
          <p>
            <img src={instagramLogo} height="45" onClick={openInstagram} />
            <img src={twitterLogo} height="45" onClick={openTwitter} />
          </p>
        </Styled.Social>
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
        <Styled.SongTitle>Well Done!</Styled.SongTitle>
        <Styled.Tries>
          You correctly guessed today&apos;s Geetle in{" "}
          {playTimes[currentTry - 1] / 1000} {secondsConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.TimeToNext>
          Come back in {hoursToNextDay} hours and {minsToNextDay} minutes to
          play again!
        </Styled.TimeToNext>
      </>
    );
  } else {
    const copyResult = React.useCallback(() => {
      alert("Score copied to clipboard");
      navigator.clipboard.writeText(
        "I didn't get today's Geetle! Can you? Try now at www.geetle.app"
      );
    }, [guesses]);

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
        <Styled.GeetlePlayer>
          <CircularInput value={playTimes[currentTry - 1] / 16000}>
            <CircularTrack />
            <CircularProgress stroke="#2C3088" strokeLinecap="butt" />
            <line x1={100} x2={100} y1={-10} y2={10} stroke="#2C3088" />
            <line x1={143} x2={135} y1={-1} y2={17} stroke="#2C3088" />
            <line x1={180} x2={166} y1={25} y2={38} stroke="#2C3088" />
            <line x1={190} x2={210} y1={100} y2={100} stroke="#2C3088" />
            <line x1={143} x2={135} y1={201} y2={183} stroke="#2C3088" />
            <line x1={-1} x2={17} y1={143} y2={135} stroke="#2C3088" />
          </CircularInput>
          <Styled.GeetleLogo>
            <img
              src={shareLogo}
              height="120"
              style={{ cursor: "pointer" }}
              onClick={copyResult}
            />
          </Styled.GeetleLogo>
        </Styled.GeetlePlayer>
        <Styled.TimeToNext>
          Come back tomorrow to try again - the song will be updated in{" "}
          {hoursToNextDay} hours and {minsToNextDay} minutes!
        </Styled.TimeToNext>
      </>
    );
  }
}
