import styled from "styled-components";

// Lessons Learned:
// * Be careful where you define flex. If it's in the parent element, it's going to set the height of the entire parent element based on the height of the tallest child.
// * Labels are inline elements and therefore don't respond to top/bottom padding

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
