import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

import { BodyContainer } from "./body.styles";

import Tab from "../tab/tab.component";

const Body = () => {
  const theme = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState("Feed");

  const onTabClick = tabName => {
    setSelectedTab(tabName);
  };

  return (
    <BodyContainer theme={theme}>
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
            onClick={() => onTabClick("Favorites")}
          />
          <label htmlFor="tab2">Favorites</label>
        </li>
      </ul>
      {selectedTab === "Feed" ? <p>Feed Content</p> : <p>Favorites Content</p>}
    </BodyContainer>
  );
};

export default Body;
