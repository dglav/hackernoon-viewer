import React, { useContext } from "react";

import { UserContext } from "../../context/user/user.context";
import { ThemeContext } from "../../context/theme/theme.context";

import { LoginButtonContainer } from "./login-button.styles";

const LoginButton = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);

  console.log(theme.lightPrimaryColor);

  const clickHandler = user => {
    user ? setUser("") : setUser("defaultUser");
  };

  return (
    <LoginButtonContainer onClick={() => clickHandler(user)} theme={theme}>
      {user ? "Logout" : "Login"}
    </LoginButtonContainer>
  );
};

export default LoginButton;
