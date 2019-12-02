import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/theme/theme.context";
import { PostsContext } from "../../context/posts/posts.context";

import { addFavorite, addBookmark } from "../../context/posts/posts.actions";

import {
  readFromDatabase,
  syncWithDatabase
} from "../../firebase/firebase.utils";

import { TabContainer, ContentContainer, IconContainer } from "./body.styles";

import Feed from "../feed/feed.component";
import Bookmarks from "../bookmarks/bookmarks.component";
import Favorites from "../favorites/favorites.component";
import SearchBar from "../search-bar/search-bar.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const { posts, dispatch } = useContext(PostsContext);
  const [selectedTab, setSelectedTab] = useState("feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    async function syncFromDatabase() {
      const favorites = await readFromDatabase("favorites");
      favorites.forEach(post => dispatch(addFavorite(post)));

      const bookmarks = await readFromDatabase("bookmarks");
      bookmarks.forEach(post => dispatch(addBookmark(post)));
    }
    syncFromDatabase();
  }, []);

  const sync = async tabName => {
    setSyncing(true);
    await syncWithDatabase(tabName, posts[tabName]);
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
      case "feed":
        return <Feed searchQuery={searchQuery} />;
      case "bookmarks":
        return <Bookmarks searchQuery={searchQuery} />;
      case "favorites":
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
            checked={selectedTab === "feed"}
            onClick={() => onTabClick("feed")}
          />
          <label htmlFor="tab1">Feed</label>
        </li>
        <li>
          <input
            type="radio"
            id="tab2"
            name="tab"
            onClick={() => onTabClick("bookmarks", selectedTab)}
          />
          <label htmlFor="tab2">
            <span>Bookmarks</span>
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "bookmarks"}
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
            onClick={() => onTabClick("favorites", selectedTab)}
          />
          <label htmlFor="tab3">
            <span>Favorites</span>
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "favorites"}
                syncing={syncing}
              ></IconContainer>
            </span>
          </label>
        </li>
      </ul>

      <ContentContainer theme={theme}>
        <SearchBar onChange={onChange} />
        {renderSwitch(selectedTab)}
      </ContentContainer>
    </TabContainer>
  );
};

export default Body;
