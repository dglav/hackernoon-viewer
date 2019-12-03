import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 85%;
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
`;

export const GitIcon = styled.a`
  color: ${props => props.theme.darkPrimaryColor};
  font-size: 2em;
`;
