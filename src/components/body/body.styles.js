import styled, { keyframes, css } from "styled-components";

// Lessons Learned:
// * Be careful where you define flex. If it's in the parent element, it's going to set the height of the entire parent element based on the height of the tallest child.
// * Labels are inline elements and therefore don't respond to top/bottom padding

export const TabContainer = styled.div`
  width: 70%;
  box-sizing: border-box;
  margin: 16px auto;
  color: ${props => props.theme.primaryTextColor};

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-end;

    li {
      list-style: none;

      input[type="radio"] {
        position: absolute;
        top: 0;
        left: -100px;
        &:checked + label {
          background-color: ${props => props.theme.darkPrimaryColor};
          border-right: none;
        }
      }

      label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 128px;
        height: 56px;
        cursor: pointer;
        text-align: center;
        background-color: ${props => props.theme.defaultPrimaryColor};
        border-radius: 10px 10px 0 0;

        &:hover {
          background-color: ${props => props.theme.darkPrimaryColor};
        }
      }
    }
  }
`;

export const ContentContainer = styled.div`
  border: 6px solid ${props => props.theme.darkPrimaryColor};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IconContainer = styled.i`
  margin-top: 4px;
  display: ${props => (props.visible ? "block" : "none")};
  animation: ${props => {
    console.log(props);
    return props.syncing
      ? css`
          ${rotate} 2s linear infinite
        `
      : css`none`;
  }};
`;
