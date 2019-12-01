import React from "react";
import ThemeContextProvider from "./context/theme/theme.context";

import { AppContainer } from "./App.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Body from "./components/body/body.component";

function App() {
  return (
    <ThemeContextProvider>
      <AppContainer>
        <Header />
        <Body />
        <Footer />
      </AppContainer>
    </ThemeContextProvider>
  );
}

export default App;
