import styled from "styled-components";

export const PostCardContainer = styled.div`
  margin: 8px;
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
