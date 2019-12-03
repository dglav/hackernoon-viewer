import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

import { FooterContainer, GitIcon } from "./footer.styles";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <FooterContainer theme={theme}>
      <GitIcon
        href="https://github.com/dglav/hackernoon-viewer"
        target="_blank"
        theme={theme}
      >
        <i className="fab fa-github" />
      </GitIcon>
    </FooterContainer>
  );
};

export default Footer;
