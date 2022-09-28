import styled from "styled-components";

export const ProgressBackground = styled.div`
  position: relative;
  z-index: -1;

  width: 100%;
  height: 20px;
  background-color: rgb(91, 100, 103);
  border-radius: 2px;

  margin-top: 5%;
`;

export const GeetlePlayer = styled.div`
  margin: 10px;
  position: relative;
`;

export const GeetleLogo = styled.div`
  position: absolute;
  top: 45px;
  left: 65px;

  img {
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const Progress = styled.div<{ value: number }>`
  width: ${({ value }) => value * 6.25}%;
  height: 20px;

  align-self: flex-start;

  background-color: ${({ theme }) => theme.green};

  border-radius: 2px;

  transition: width 0.5s;
`;

export const Separator = styled.div`
  position: absolute;
  top: 0;

  width: 0.8px;
  height: 100%;

  background-color: ${({ theme }) => theme.border100};
`;

export const GamesRemaining = styled.div`
  font-size: 30px;
  color: #47c98a;
`;

export const TimeStamps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.header};
`;

export const TimeStamp = styled.p`
  color: ${({ theme }) => theme.text};
`;
