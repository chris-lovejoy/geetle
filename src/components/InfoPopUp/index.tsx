import React from "react";
import {
  IoMusicalNoteOutline,
  IoHelpCircleOutline,
  IoInvertMode,
  IoPeopleSharp,
} from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  gameMode: string;
  onCloseMasti: () => void;
  onCloseUstaad: () => void;
}

export function InfoPopUp({ gameMode, onCloseMasti, onCloseUstaad }: Props) {
  const firstRun = localStorage.getItem("firstRun") === null;

  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome to Geetle!</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={50} />
          <p>
            Geetle is a fun Bollywood music game. The aim is to guess the name
            of the song by hearing as little of the song as possible.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={40} />
          <p>
            <b>There are two modes of play:</b>
          </p>
        </Styled.Section>
        <Styled.Section>
          <p>
            <b>Masti</b>: Listen to each segment of the song an unlimited number
            of times.
          </p>
          <p>
            <b>Ustaad</b>: Challenge yourself with a limited number of times you
            can listen to each segment.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoPeopleSharp size={40} />
          <p>
            Share your score, track your progress, and enjoy a new song
            everyday!
          </p>
        </Styled.Section>
        {firstRun && (
          <Styled.Section>
            <Button
              variant="green"
              style={{ marginTop: 20 }}
              onClick={onCloseMasti}
            >
              Play Masti
            </Button>
            <Button
              variant="red"
              style={{ marginTop: 20 }}
              onClick={onCloseUstaad}
            >
              Play Ustaad
            </Button>
          </Styled.Section>
        )}
        {!firstRun && gameMode == "" && (
          <Styled.Section>
            <Button
              variant="green"
              style={{ marginTop: 20 }}
              onClick={onCloseMasti}
            >
              Play Masti
            </Button>
            <Button
              variant="red"
              style={{ marginTop: 20 }}
              onClick={onCloseUstaad}
            >
              Play Ustaad
            </Button>
          </Styled.Section>
        )}
        {!firstRun && gameMode == "Masti" && (
          <>
            <Styled.Section>
              <Button
                variant="green"
                style={{ marginTop: 20 }}
                onClick={onCloseMasti}
              >
                Play Masti
              </Button>
              <Button
                variant="gray"
                style={{ marginTop: 20 }}
                onClick={() => void 0}
              >
                Play Ustaad
              </Button>
            </Styled.Section>
            <Styled.Section>
              <p>
                You have chosen to play in {gameMode} mode today. Good luck!
              </p>
            </Styled.Section>
          </>
        )}
        {!firstRun && gameMode == "Ustaad" && (
          <>
            <Styled.Section>
              <Button
                variant="gray"
                style={{ marginTop: 20 }}
                onClick={() => void 0}
              >
                Play Masti
              </Button>
              <Button
                variant="red"
                style={{ marginTop: 20 }}
                onClick={onCloseUstaad}
              >
                Play Ustaad
              </Button>
            </Styled.Section>
            <Styled.Section>
              <p>
                You have chosen to play in {gameMode} mode today. Good luck!
              </p>
            </Styled.Section>
          </>
        )}
        <Styled.Contact>
          {/* Contact - <a href="mailto:dev@chrislovejoy.me">dev@chrislovejoy.me</a>{" "} */}
          {/* <br /> */}
          <br />
          Developed by{" "}
          <a href="mailto:dev@chrislovejoy.me">dev@chrislovejoy.me</a>
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
