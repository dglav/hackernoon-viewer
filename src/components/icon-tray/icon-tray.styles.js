import styled from "styled-components";

export const IconTrayContainer = styled.div`
  display: flex;
  visibility: ${props => (props.iconTrayVisibility ? "visible" : "hidden")};
  position: absolute;
  right: 0;
  top: 0;
  justify-content: right;
  align-items: center;
  height: 100%;
  background-color: ${props => props.theme.accentColor};
  border-radius: 10px 0 0 10px;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
