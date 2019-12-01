import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

import { HeaderContainer } from "./header.styles";

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <HeaderContainer theme={theme}>
      <p>Hacker News</p>
      <input type="text" placeholder="Search"></input>
      <button>Login! *</button>
    </HeaderContainer>
  );
};

export default Header;
