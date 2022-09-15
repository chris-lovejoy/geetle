import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
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

        <Styled.Logo>Geetle</Styled.Logo>
        {headerProps.gameMode}
        <a href="#"></a>
      </Styled.Content>
    </Styled.Container>
  );
}
