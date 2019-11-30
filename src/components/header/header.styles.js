import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.defaultPrimaryColor};
  color: ${props => props.theme.primaryTextColor};
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15%;
`;
