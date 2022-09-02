import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Hi! 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
            Geetle is a music game inspired by{" "}
            <a href="https://www.spotify.com/heardle/">Heardle</a>, but with
            Hindi songs.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>
            Every day a new track is generated and your task is to guess it - by
            hearing as little of the song as possible.
          </p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Close
        </Button>
        <Styled.Contact>
          Contact - <a href="mailto:dev@chrislovejoy.me">dev@chrislovejoy.me</a>{" "}
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
