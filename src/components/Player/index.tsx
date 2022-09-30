import React, { useState } from "react";
import YouTube from "react-youtube";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";
import { event } from "react-ga";

import { playTimes, playLimits } from "../../constants";
import geetleLogo from "../../assets/geetleLogo.png";

import * as Styled from "./index.styled";

interface Props {
  id: string;
  startTime: number;
  currentTry: number;
  numPlaysAtTry: number;
  gameMode: string;
  incrementPlays: () => void;
}

export function Player({
  id,
  startTime,
  currentTry,
  numPlaysAtTry,
  gameMode,
  incrementPlays,
}: Props) {
  const opts = {
    width: "0",
    height: "0",
  };

  // react-youtube doesn't export types for this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = React.useRef<any>(null);

  const currentPlayTime = playTimes[currentTry];

  const [play, setPlay] = React.useState<boolean>(false);

  const [showPlayPrompt, setPlayPrompt] = React.useState<boolean>(true);

  const [currentTime, setCurrentTime] = React.useState<number>(0);

  const [isReady, setIsReady] = React.useState<boolean>(false);

  const [noPlaysRemaining, setNoPlaysRemaining] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setInterval(() => {
      playerRef.current?.internalPlayer
        .getCurrentTime()
        .then((time: number) => {
          if (time >= startTime) {
            setCurrentTime(time - startTime);
          }
        });
    }, 5);
  }, []);

  React.useEffect(() => {
    if (playLimits[currentTry] - numPlaysAtTry < 1 && gameMode === "Ustaad") {
      setNoPlaysRemaining(true);
    }
  }, [numPlaysAtTry]);

  React.useEffect(() => {
    setNoPlaysRemaining(false);
  }, [currentTry]);

  React.useEffect(() => {
    if (play) {
      setPlayPrompt(false);
      if (currentTime * 1000 >= currentPlayTime) {
        playerRef.current?.internalPlayer.pauseVideo();
        playerRef.current?.internalPlayer.seekTo(startTime);
        setPlay(false);
      }
    }
  }, [play, currentTime]);

  // don't call play video each time currentTime changes
  const startPlayback = React.useCallback(() => {
    playerRef.current?.internalPlayer.seekTo(startTime);
    playerRef.current?.internalPlayer.playVideo();
    setPlay(true);
    incrementPlays();
    event({
      category: "Player",
      action: "Played song",
    });
  }, []);

  const setReady = React.useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <YouTube opts={opts} videoId={id} onReady={setReady} ref={playerRef} />
      {isReady ? (
        <>
          {!noPlaysRemaining && (
            <Styled.GeetlePlayer>
              <CircularInput value={currentTime / 16} radius={150}>
                <CircularTrack />
                <CircularProgress stroke="#2C3088" strokeLinecap="butt" />
                <line
                  x1={150}
                  x2={150}
                  y1={-10}
                  y2={10}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={212}
                  x2={204}
                  y1={3}
                  y2={21}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={266}
                  x2={252}
                  y1={39}
                  y2={53}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={290}
                  x2={310}
                  y1={150}
                  y2={150}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={215}
                  x2={206}
                  y1={296}
                  y2={278}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={4}
                  x2={22}
                  y1={215}
                  y2={206}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
              </CircularInput>
              <Styled.GeetleLogo>
                <img
                  src={geetleLogo}
                  height="220"
                  style={{ cursor: "pointer" }}
                  onClick={startPlayback}
                />
              </Styled.GeetleLogo>
            </Styled.GeetlePlayer>
          )}
          {noPlaysRemaining && (
            <Styled.GeetlePlayer>
              <CircularInput value={currentTime / 16} radius={150}>
                <CircularTrack />
                <CircularProgress stroke="#2C3088" strokeLinecap="butt" />
                <line
                  x1={150}
                  x2={150}
                  y1={-10}
                  y2={10}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={212}
                  x2={204}
                  y1={3}
                  y2={21}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={266}
                  x2={252}
                  y1={39}
                  y2={53}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={290}
                  x2={310}
                  y1={150}
                  y2={150}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={215}
                  x2={206}
                  y1={296}
                  y2={278}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={4}
                  x2={22}
                  y1={215}
                  y2={206}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
              </CircularInput>
              <Styled.GeetleLogo>
                <img
                  src={geetleLogo}
                  height="220"
                  style={{ cursor: "pointer" }}
                  onClick={() => void 0}
                />
              </Styled.GeetleLogo>
            </Styled.GeetlePlayer>
          )}
          {showPlayPrompt && (
            <Styled.Paragraph>
              <b>Click the Geetle Logo above to start playing</b>
            </Styled.Paragraph>
          )}
          {gameMode === "" && (
            <Styled.Paragraph>
              <em>
                Click the &apos;i&apos; in the top left to select a game mode.
              </em>
            </Styled.Paragraph>
          )}
          <Styled.GamesRemaining>
            {gameMode === "Ustaad" && (
              <Styled.Paragraph>
                <b>
                  {Math.max(playLimits[currentTry] - numPlaysAtTry, 0)} plays
                  remaining
                </b>
              </Styled.Paragraph>
            )}
          </Styled.GamesRemaining>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
