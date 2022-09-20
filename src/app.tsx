import { event } from "react-ga";

import React from "react";
import _ from "lodash";

import { Song } from "./types/song";
import { GuessType } from "./types/guess";

import { todaysSolution } from "./helpers";

import { Header, InfoPopUp, Game, Footer } from "./components";

import * as Styled from "./app.styled";

function App() {
  const initialGuess = {
    song: undefined,
    skipped: false,
    isCorrect: undefined,
  } as GuessType;

  const [guesses, setGuesses] = React.useState<GuessType[]>(
    Array.from({ length: 5 }).fill(initialGuess) as GuessType[]
  );
  const [currentTry, setCurrentTry] = React.useState<number>(0);
  const [numPlaysAtTry, setNumPlaysAtTry] = React.useState<number>(0);
  const [selectedSong, setSelectedSong] = React.useState<Song>();
  const [didGuess, setDidGuess] = React.useState<boolean>(false);

  const firstRun = localStorage.getItem("firstRun") === null;
  let stats = JSON.parse(localStorage.getItem("stats") || "{}");
  const gameMode = localStorage.getItem("gameMode") || "";

  React.useEffect(() => {
    if (Array.isArray(stats)) {
      const visitedToday = _.isEqual(
        todaysSolution,
        stats[stats.length - 1].solution
      );

      if (!visitedToday) {
        stats.push({
          solution: todaysSolution,
          currentTry: 0,
          didGuess: 0,
        });
      } else {
        const { currentTry, guesses, didGuess } = stats[stats.length - 1];
        setCurrentTry(currentTry);
        setGuesses(guesses);
        setDidGuess(didGuess);
      }
    } else {
      // initialize stats
      // useEffect below does rest
      stats = [];
      stats.push({
        solution: todaysSolution,
      });
    }
  }, []);

  React.useEffect(() => {
    if (Array.isArray(stats)) {
      stats[stats.length - 1].currentTry = currentTry;
      stats[stats.length - 1].didGuess = didGuess;
      stats[stats.length - 1].guesses = guesses;
    }
  }),
    [guesses, currentTry, didGuess];

  React.useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  React.useEffect(() => {
    const dateNow = new Date();
    const todayDate = dateNow.getDate();
    const todayMonth = dateNow.getMonth();
    const todayString = `${todayDate}-${todayMonth}`;
    const lastPlayed = localStorage.getItem("lastPlayed") || 0;
    if (lastPlayed != todayString) {
      localStorage.setItem("lastPlayed", todayString);
      localStorage.setItem("gameMode", "");
    }
  }, []);

  const dateNow = new Date();
  const todayDate = dateNow.getDate();
  const todayMonth = dateNow.getMonth();
  const lastPlayed = `${todayDate}-${todayMonth}`;

  const [isInfoPopUpOpen, setIsInfoPopUpOpen] =
    React.useState<boolean>(firstRun);

  const openInfoPopUp = React.useCallback(() => {
    setIsInfoPopUpOpen(true);
  }, []);

  const headerProps = {
    openInfoPopUp: openInfoPopUp,
    gameMode: gameMode,
  };

  const closeInfoPopUpUstaad = React.useCallback(() => {
    localStorage.setItem("gameMode", "Ustaad");
    if (firstRun) {
      localStorage.setItem("firstRun", "false");
      setIsInfoPopUpOpen(false);
    } else {
      setIsInfoPopUpOpen(false);
    }
  }, [localStorage.getItem("firstRun")]);

  const closeInfoPopUpMasti = React.useCallback(() => {
    localStorage.setItem("gameMode", "Masti");
    if (firstRun) {
      localStorage.setItem("firstRun", "false");
      setIsInfoPopUpOpen(false);
    } else {
      setIsInfoPopUpOpen(false);
    }
  }, [localStorage.getItem("firstRun")]);

  const incrementPlaysAtTry = React.useCallback(() => {
    setNumPlaysAtTry((numPlaysAtTry) => numPlaysAtTry + 1);
    return;
  }, []);

  const skip = React.useCallback(() => {
    setGuesses((guesses: GuessType[]) => {
      const newGuesses = [...guesses];
      newGuesses[currentTry] = {
        song: undefined,
        skipped: true,
        isCorrect: undefined,
      };
      return newGuesses;
    });

    setCurrentTry((currentTry) => currentTry + 1);
    setNumPlaysAtTry(0);

    event({
      category: "Game",
      action: "Skip",
    });
  }, [currentTry]);

  const guess = React.useCallback(() => {
    const isCorrect = selectedSong === todaysSolution;

    if (!selectedSong) {
      alert("Choose a song");
      return;
    }

    setGuesses((guesses: GuessType[]) => {
      const newGuesses = [...guesses];
      newGuesses[currentTry] = {
        song: selectedSong,
        skipped: false,
        isCorrect: isCorrect,
      };

      return newGuesses;
    });
    setCurrentTry((currentTry) => currentTry + 1);
    setNumPlaysAtTry(0);
    setSelectedSong(undefined);

    if (isCorrect) {
      setDidGuess(true);
    }

    event({
      category: "Game",
      action: "Guess",
      label: `${selectedSong.movie} - ${selectedSong.name}`,
      value: isCorrect ? 1 : 0,
    });
  }, [guesses, selectedSong]);

  return (
    <main>
      <Header {...headerProps} />
      {isInfoPopUpOpen && (
        <InfoPopUp
          gameMode={gameMode}
          onCloseMasti={closeInfoPopUpMasti}
          onCloseUstaad={closeInfoPopUpUstaad}
        />
      )}
      <Styled.Container>
        <Game
          guesses={guesses}
          didGuess={didGuess}
          todaysSolution={todaysSolution}
          currentTry={currentTry}
          gameMode={gameMode}
          numPlaysAtTry={numPlaysAtTry}
          setSelectedSong={setSelectedSong}
          skip={skip}
          guess={guess}
          incrementPlays={incrementPlaysAtTry}
        />
      </Styled.Container>
      <Footer />
    </main>
  );
}

export default App;
