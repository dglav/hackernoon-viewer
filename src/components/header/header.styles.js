import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.darkPrimaryColor};
  color: ${props => props.theme.primaryTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  padding: 0 15%;
`;
