import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsCircle } from "react-icons/bs";
import { isPropertySignature } from "typescript";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  gameMode: string;
}

export function Header(headerProps: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ToggleButtons>
          <IoInformationCircleOutline
            onClick={headerProps.openInfoPopUp}
            size={30}
            width={30}
            height={30}
          />
        </Styled.ToggleButtons>
        <Styled.Logo>
          <h1>Geetle</h1>
        </Styled.Logo>
        {headerProps.gameMode === "Masti" && (
          <Styled.MastiMode>{headerProps.gameMode}</Styled.MastiMode>
        )}
        {headerProps.gameMode === "Ustaad" && (
          <Styled.UstaadMode>{headerProps.gameMode}</Styled.UstaadMode>
        )}
      </Styled.Content>
    </Styled.Container>
  );
}
