import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: ${props => props.theme.lightPrimaryColor};
  display: flex;
  align-items: center;
  color: ${props =>
    props.isInputFocused
      ? props.theme.primaryTextColor
      : props.theme.secondaryTextColor};
`;

export const IconContainer = styled.i`
  padding-left: 8px;
`;

export const InputContainer = styled.input`
  height: 100%;
  flex: 1 0 auto;
  padding: 0 8px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.lightPrimaryColor};
  color: ${props =>
    props.isInputFocused
      ? props.theme.primaryTextColor
      : props.theme.secondaryTextColor};
`;
