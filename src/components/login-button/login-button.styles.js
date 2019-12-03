import styled from "styled-components";

export const LoginButtonContainer = styled.button`
  border-radius: 100px;
  width: 96px;
  height: 48px;
  box-sizing: border-box;
  color: ${props => props.theme.lightPrimaryColor};
  border: 3px solid ${props => props.theme.lightPrimaryColor};
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 0px 0px 5px grey;
  }

  &:hover {
    background-color: ${props => props.theme.lightPrimaryColor};
    color: ${props => props.theme.darkPrimaryColor};
  }
`;
