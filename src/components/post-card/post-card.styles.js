import styled from "styled-components";

export const PostCardContainer = styled.div`
  padding: 8px;
  position: relative;
  &:first-child {
    #IconTray {
      border-radius: 0 0 0 10px;
    }
  }
  &:last-child {
    #IconTray {
      border-radius: 10px 0 4px 0;
    }
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-weight: normal;
`;

export const Subtitle = styled.span`
  margin: 0;
  font-size: 0.7em;
  color: ${props => props.theme.secondaryTextColor};
  a {
    text-decoration: none;
    color: ${props => props.theme.secondaryTextColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IconTray = styled.div`
  display: flex;
  visibility: ${props => (props.iconTrayDisplay ? "visible" : "hidden")}
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
