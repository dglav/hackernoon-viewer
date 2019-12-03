import React, { useEffect, useContext, useState } from "react";

import { TabsContainer, IconContainer } from "./tabs.styles";

import { ThemeContext } from "../../context/theme/theme.context";
import { PostsContext } from "../../context/posts/posts.context";
import { UserContext } from "../../context/user/user.context";

import {
  addFavorite,
  addBookmark,
  removeSavedPosts
} from "../../context/posts/posts.actions";

import {
  readFromDatabase,
  syncWithDatabase
} from "../../firebase/firebase.utils";

const Tabs = ({ selectedTab: { selectedTab, setSelectedTab } }) => {
  const theme = useContext(ThemeContext);
  const { posts, dispatch } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  const [syncing, setSyncing] = useState(false);

  const onTabClick = (tabName, ...[currentTab]) => {
    if (user && currentTab === tabName) {
      sync(tabName);
    }
    setSelectedTab(tabName);
  };

  const sync = async tabName => {
    setSyncing(true);
    await syncWithDatabase(tabName, posts[tabName]);
    setSyncing(false);
  };

  useEffect(() => {
    if (user) {
      async function syncFromDatabase() {
        const favorites = await readFromDatabase("favorites");
        favorites.forEach(post => dispatch(addFavorite(post)));

        const bookmarks = await readFromDatabase("bookmarks");
        bookmarks.forEach(post => dispatch(addBookmark(post)));
      }
      syncFromDatabase();
    } else {
      dispatch(removeSavedPosts());
    }
  }, [user]);

  return (
    <TabsContainer theme={theme}>
      <li>
        <input
          type="radio"
          id="tab1"
          name="tab"
          checked={selectedTab === "feed"}
          onClick={() => onTabClick("feed")}
          readOnly
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
          {user ? (
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "bookmarks"}
                syncing={syncing}
              ></IconContainer>
            </span>
          ) : null}
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
          {user ? (
            <span>
              <IconContainer
                className="fas fa-sync"
                visible={selectedTab === "favorites"}
                syncing={syncing}
              ></IconContainer>
            </span>
          ) : null}
        </label>
      </li>
    </TabsContainer>
  );
};

export default Tabs;
