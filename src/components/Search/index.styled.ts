import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;

  z-index: 4;

  margin-top: 5%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.background100};

  width: 100%;
  height: 50px;

  border-width: 1px;
  border-radius: 5px;
  border-style: solid;

  color: ${({ theme }) => theme.text};
`;

export const SearchPadding = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 0 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0 10px;

  background-color: transparent;
  border: none;
  outline: none !important;

  color: white;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  ::-webkit-input-placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::-moz-placeholder {
    opacity: 1;
    color: white;
  }

  ::placeholder {
    color: white;
  }
`;

export const ResultsContainer = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
`;

export const Result = styled.div`
  padding: 1px 15px;

  background-color: ${({ theme }) => theme.background100};

  border-width: 1px;
  border-radius: 5px;
  border-style: solid;

  color: ${({ theme }) => theme.text};

  cursor: pointer;
`;

export const ResultText = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;
