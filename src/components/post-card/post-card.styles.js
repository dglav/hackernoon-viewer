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
