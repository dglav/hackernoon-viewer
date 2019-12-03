import styled, { keyframes, css } from "styled-components";

export const TabsContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-end;

  li {
    list-style: none;

    input[type="radio"] {
      position: absolute;
      top: 0;
      left: -100px;
      &:checked + label {
        background-color: ${props => props.theme.darkPrimaryColor};
        border-right: none;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 128px;
      height: 56px;
      cursor: pointer;
      text-align: center;
      background-color: ${props => props.theme.defaultPrimaryColor};
      border-radius: 10px 10px 0 0;

      &:hover {
        background-color: ${props => props.theme.darkPrimaryColor};
      }
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IconContainer = styled.i`
  margin-top: 4px;
  display: ${props => (props.visible ? "block" : "none")};
  animation: ${props =>
    props.syncing
      ? css`
          ${rotate} 2s linear infinite
        `
      : css`none`};
`;
