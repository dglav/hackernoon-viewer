import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

import { TabContainer, ContentContainer } from "./body.styles";

import Feed from "../feed/feed.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("Feed");

  const onTabClick = tabName => {
    setSelectedTab(tabName);
  };

  const renderSwitch = selectedTab => {
    switch (selectedTab) {
      case "Feed":
        return <Feed />;
      case "Bookmarks":
        return <p>Bookmarks</p>;
      case "Favorites":
        return <p>Favorites</p>;
      default:
        return null;
    }
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
      <ContentContainer theme={theme}>
        {renderSwitch(selectedTab)}
      </ContentContainer>
    </TabContainer>
  );
};

export default Body;
