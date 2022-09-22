import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-color: ${({ theme }) => theme.border};
  border-bottom-width: 0.5px;
  border-bottom-style: solid;

  margin-bottom: 0px;
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr 3fr;
  justify-items: center;
  justify-content: space-between;

  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
  }

  max-width: 650px;

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ToggleButtons = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: auto;
  h1 {
    color: ${({ theme }) => theme.header};
    font-family: "Mukta", serif;
    font-size: 62px;
    text-transform: uppercase;
    width: max-content;
    margin-block-start: 0px;
    margin-block-end: 0px;

    -webkit-touch-callout: none;
    user-select: none;
  }
`;

export const MastiMode = styled.p`
  margin-right: auto;
  margin-bottom: auto;
  background: #2c3088;
  border-radius: 25px;
  color: white;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const UstaadMode = styled.p`
  margin-right: auto;
  margin-bottom: auto;
  padding: 14px;
  background: #47c98a;
  border-radius: 25px;
  color: white;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
`;
