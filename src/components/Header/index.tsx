import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsCircle } from "react-icons/bs";
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
      <Styled.ToggleButtons>
        <IoInformationCircleOutline
          onClick={headerProps.openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />
        {/* {headerProps.gameMode === "Masti" && (
          <BsCircle
            onClick={headerProps.toUstaadGameMode}
            size={30}
            width={30}
            height={30}
          />
        )}
        {headerProps.gameMode === "Ustaad" && (
          <BsCircle
            onClick={headerProps.toMastiGameMode}
            size={30}
            width={30}
            height={30}
          />
        )} */}
      </Styled.ToggleButtons>
      <Styled.Content>
        <Styled.Logo>Geetle</Styled.Logo>
        <p>{headerProps.gameMode}</p>
      </Styled.Content>
    </Styled.Container>
  );
}
