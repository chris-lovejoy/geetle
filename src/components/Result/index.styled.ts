import styled from "styled-components";

export const ResultTitle = styled.h1`
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: 0;
`;

export const Tries = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin: 0;
`;

export const GeetlePlayer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
`;

export const GeetleLogo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;

  img {
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const Social = styled.div`
  p {
    margin-top: 0;
  }
`;

export const SongTitle = styled.h3`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TimeToNext = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin: 0;
`;
