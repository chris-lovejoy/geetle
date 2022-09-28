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
                <CircularProgress stroke="#2C3088" />
                <line
                  x1={150}
                  x2={150}
                  y1={-15}
                  y2={15}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={214.5}
                  x2={202.5}
                  y1={-1.5}
                  y2={25.5}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={270}
                  x2={249}
                  y1={32.5}
                  y2={57}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={285}
                  x2={365}
                  y1={150}
                  y2={150}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={214.5}
                  x2={202.5}
                  y1={301.5}
                  y2={274.5}
                  stroke="#FFFFFF"
                  height={100}
                  strokeWidth={5}
                />
                <line
                  x1={-1.5}
                  x2={25.5}
                  y1={214.5}
                  y2={202.5}
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
              <CircularInput value={currentTime / 16}>
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
                <img
                  src={geetleLogo}
                  height="150"
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
