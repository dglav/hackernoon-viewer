import React from "react";
import ThemeContextProvider from "./context/theme/theme.context";
import PostsContextProvider from "./context/posts/posts.context";
import UserContextProvider from "./context/user/user.context";

import { AppContainer } from "./App.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Body from "./components/body/body.component";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <AppContainer>
          <Header />
          <PostsContextProvider>
            <Body />
          </PostsContextProvider>
          <Footer />
        </AppContainer>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
