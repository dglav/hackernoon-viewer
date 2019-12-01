import styled from "styled-components";

export const IconTray = styled.div`
  display: ${props => {
    console.log(props.hoverState);
    return props.hoverState ? "flex" : "none";
  }};
  position: absolute;
  right: -8px;
  top: -8px;
  justify-content: right;
  align-items: center;
  height: calc(100% + 16px);
  background-color: ${props => props.theme.accentColor};

  &:last-child {
    border-radius: 0 0 4px 0;
  }
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
