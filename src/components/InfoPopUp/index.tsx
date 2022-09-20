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
  onCloseMasti: () => void;
  onCloseUstaad: () => void;
}

export function InfoPopUp({ onCloseMasti, onCloseUstaad }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome to Geetle!</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={50} />
          <p>
            Geetle is a Bollywood music game. The aim of the game is to guess
            the name of the song by hearing as little of the track as possible.
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
            <b>Masti</b>: play each segment of the track an unlimited number of
            times
          </p>
          <p>
            <b>Ustaad</b>: challenge yourself with a limited number of segment
            plays
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoPeopleSharp size={40} />
          <p>
            Share your score, track your progress, and enjoy a new song everyday
          </p>
        </Styled.Section>
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
