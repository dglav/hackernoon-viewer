import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

import {
  SearchBarContainer,
  IconContainer,
  InputContainer
} from "./search-bar.styles";

const SearchBar = ({ onChange }) => {
  const theme = useContext(ThemeContext);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const focusHandler = () => {
    setIsInputFocused(!isInputFocused);
  };

  return (
    <SearchBarContainer theme={theme} isInputFocused={isInputFocused}>
      <IconContainer className="fas fa-search" theme={theme}></IconContainer>
      <InputContainer
        type="search"
        placeholder="Filter based on: title, url"
        theme={theme}
        onFocus={() => focusHandler()}
        onBlur={() => focusHandler()}
        isInputFocused={isInputFocused}
        onChange={onChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
