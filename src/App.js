import React from "react";
import ThemeContextProvider from "./context/theme/theme.context";
import PostsContextProvider from "./context/posts/posts.context";
import UserContextProvider from "./context/user/user.context";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Body from "./components/body/body.component";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Header />
        <PostsContextProvider>
          <Body />
        </PostsContextProvider>
        <Footer />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
