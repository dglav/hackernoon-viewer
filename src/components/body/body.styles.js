import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 70%;
  box-sizing: border-box;
  margin: 16px auto;
  color: ${props => props.theme.primaryTextColor};
`;

export const ContentContainer = styled.div`
  border: 6px solid ${props => props.theme.darkPrimaryColor};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const PostListContainer = styled.div`
  padding: 0 8px;
`;
