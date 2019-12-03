import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

import LoginButton from "../login-button/login-button.component";

import { HeaderContainer } from "./header.styles";

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <HeaderContainer theme={theme}>
      <p>Hacker News</p>
      <LoginButton />
    </HeaderContainer>
  );
};

export default Header;
