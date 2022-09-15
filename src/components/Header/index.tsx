import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { isPropertySignature } from "typescript";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  toMastiGameMode: () => void;
  toUstaadGameMode: () => void;
  gameMode: string;
}

export function Header(headerProps: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <IoInformationCircleOutline
          onClick={headerProps.openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />

        {headerProps.gameMode === "Masti" && (
          <button onClick={headerProps.toUstaadGameMode}>to ustaad</button>
        )}
        {headerProps.gameMode === "Ustaad" && (
          <button onClick={headerProps.toMastiGameMode}>to masti</button>
        )}

        <Styled.Logo>Geetle</Styled.Logo>
        {headerProps.gameMode}
        <a href="#"></a>
      </Styled.Content>
    </Styled.Container>
  );
}
