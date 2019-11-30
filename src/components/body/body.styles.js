import styled from "styled-components";

// Lessons Learned:
// * Be careful where you define flex. If it's in the parent element, it's going to set the height of the entire parent element based on the height of the tallest child.
// * Labels are inline elements and therefore don't respond to top/bottom padding

export const BodyContainer = styled.div`
  width: 70%;
  box-sizing: border-box;
  height: 100px;
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
          padding-top: 20px;
          background-color: ${props => props.theme.darkPrimaryColor};
        }
      }
      label {
        display: block;
        width: 100px;
        padding: 16px;
        cursor: pointer;
        text-align: center;
        background-color: ${props => props.theme.defaultPrimaryColor};

        &:hover {
          background-color: ${props => props.theme.darkPrimaryColor};
        }
      }
    }
  }
  p {
    margin: 0;
    background-color: ${props => props.theme.defaultPrimaryColor};
  }
`;
