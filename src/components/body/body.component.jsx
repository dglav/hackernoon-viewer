import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

import {
  BodyContainer,
  ContentContainer,
  PostListContainer
} from "./body.styles";

import Tabs from "../tabs/tabs.component";
import Feed from "../feed/feed.component";
import Bookmarks from "../bookmarks/bookmarks.component";
import Favorites from "../favorites/favorites.component";
import SearchBar from "../search-bar/search-bar.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("feed");
  const [searchQuery, setSearchQuery] = useState("");

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
    <BodyContainer theme={theme}>
      <Tabs selectedTab={{ selectedTab, setSelectedTab }} />
      <ContentContainer theme={theme}>
        <SearchBar onChange={onChange} />
        <PostListContainer>{renderSwitch(selectedTab)}</PostListContainer>
      </ContentContainer>
    </BodyContainer>
  );
};

export default Body;
