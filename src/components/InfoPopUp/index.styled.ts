import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;

  font-family: "Helvetica", serif;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const PopUp = styled.div`
  width: 90%;
  max-width: 550px;
  @media (max-width: 768px) {
    width: 95%;
    overflow: auto;
  }
  padding: 15px;

  background-color: rgb(103, 112, 170);

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 10px;
    margin-bottom: 0;
    color: #ffffff;
  }

  p {
    color: #ffffff;
  }
`;

export const Spacer = styled.div`
  width: 70%;
  height: 0.2px;

  margin: 8px 0;

  background-color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

export const TitleSection = styled.div`
  display: flex;

  @media (min-width: 768px) {
    gap: 225px;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    gap: 180px;
  }

  @media (max-width: 400px) {
    gap: 100px;
  }

  align-items: center;
  justify-content: space-between;
  color: #ffffff;

  p {
    margin-top: 5px;
    margin-bottom: 0px;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Section = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  text-align: center;

  p {
    @media (max-width: 400px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Contact = styled.p`
  a {
    color: ${({ theme }) => theme.text};
  }
  margin-top: 1%;

  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.5;
`;
