import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme/theme.context";
import PostsContextProvider from "../../context/posts/posts.context";

import { TabContainer, ContentContainer } from "./body.styles";

import Feed from "../feed/feed.component";
import Bookmarks from "../bookmarks/bookmarks.component";
import Favorites from "../favorites/favorites.component";
import SearchBar from "../search-bar/search-bar.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("Feed");
  const [searchQuery, setSearchQuery] = useState("");

  const onTabClick = tabName => {
    setSelectedTab(tabName);
  };

  const renderSwitch = selectedTab => {
    switch (selectedTab) {
      case "Feed":
        return <Feed searchQuery={searchQuery} />;
      case "Bookmarks":
        return <Bookmarks searchQuery={searchQuery} />;
      case "Favorites":
        return <Favorites searchQuery={searchQuery} />;
      default:
        return null;
    }
  };

  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <TabContainer theme={theme}>
      <ul>
        <li>
          <input
            type="radio"
            id="tab1"
            name="tab"
            checked
            onClick={() => onTabClick("Feed")}
          />
          <label htmlFor="tab1">Feed</label>
        </li>
        <li>
          <input
            type="radio"
            id="tab2"
            name="tab"
            onClick={() => onTabClick("Bookmarks")}
          />
          <label htmlFor="tab2">Bookmarks</label>
        </li>
        <li>
          <input
            type="radio"
            id="tab3"
            name="tab"
            onClick={() => onTabClick("Favorites")}
          />
          <label htmlFor="tab3">Favorites</label>
        </li>
      </ul>
      <PostsContextProvider>
        <ContentContainer theme={theme}>
          <SearchBar onChange={onChange} />
          {renderSwitch(selectedTab)}
        </ContentContainer>
      </PostsContextProvider>
    </TabContainer>
  );
};

export default Body;
