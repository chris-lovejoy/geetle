import styled from "styled-components";

export const ResultTitle = styled.h1`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Tries = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
`;

export const GeetlePlayer = styled.div`
  margin: 60px;
  position: relative;
`;

export const GeetleLogo = styled.div`
  position: absolute;
  top: 35px;
  left: 30px;

  img {
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const SongTitle = styled.h3`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
`;

export const TimeToNext = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;
