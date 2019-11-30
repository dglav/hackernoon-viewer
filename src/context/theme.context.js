import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const theme = {
    darkPrimaryColor: "#F57C00",
    defaultPrimaryColor: "#FF9800",
    lightPrimaryColor: "#FFE0B2",
    primaryTextColor: "#212121",
    accentColor: "#FFC107",
    secondaryTextColor: "#757575",
    dividerColor: "#BDBDBD"
  };
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
