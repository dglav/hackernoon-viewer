import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme/theme.context";
import PostsContextProvider from "../../context/posts/posts.context";

import { TabContainer, ContentContainer, IconContainer } from "./body.styles";

import Feed from "../feed/feed.component";
import Bookmarks from "../bookmarks/bookmarks.component";
import Favorites from "../favorites/favorites.component";
import SearchBar from "../search-bar/search-bar.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("Feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [syncing, setSyncing] = useState(false);

  const sync = async tabName => {
    setSyncing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setSyncing(false);
  };

  const onTabClick = (tabName, ...[currentTab]) => {
    if (currentTab === tabName) {
      sync(tabName);
    }
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
            checked={selectedTab === "Feed"}
            onClick={() => onTabClick("Feed")}
          />
          <label htmlFor="tab1">Feed</label>
        </li>
        <li>
          <input
            type="radio"
            id="tab2"
            name="tab"
            onClick={() => onTabClick("Bookmarks", selectedTab)}
          />
          <label htmlFor="tab2">
            <span>Bookmarks</span>
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "Bookmarks"}
                syncing={syncing}
              ></IconContainer>
            </span>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="tab3"
            name="tab"
            onClick={() => onTabClick("Favorites", selectedTab)}
          />
          <label htmlFor="tab3">
            <span>Favorites</span>
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "Favorites"}
                syncing={syncing}
              ></IconContainer>
            </span>
          </label>
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
