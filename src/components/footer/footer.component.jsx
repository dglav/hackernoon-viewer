import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import { FooterContainer } from "./footer.styles";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <FooterContainer theme={theme}>
      <hr />
      <p>Thanks for checking out this site!</p>
    </FooterContainer>
  );
};

export default Footer;
