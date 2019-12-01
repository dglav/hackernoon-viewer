import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";
import { PostsContext } from "../../context/posts/posts.context";
import { addFavorite, addBookmark } from "../../context/posts/posts.actions";

import { IconTrayContainer, IconContainer } from "./icon-tray.styles";

const IconTray = ({
  postData,
  parent,
  iconClickHandler,
  iconTrayVisibility,
  animation
}) => {
  const theme = useContext(ThemeContext);
  const { dispatch } = useContext(PostsContext);

  return (
    <IconTrayContainer
      theme={theme}
      iconTrayVisibility={iconTrayVisibility}
      id="IconTray"
      className={`animated ${animation}`}
    >
      {parent === "bookmarks" ? null : (
        <IconContainer onClick={() => dispatch(addBookmark(postData))}>
          <i className="far fa-bookmark"></i>
        </IconContainer>
      )}

      {parent === "favorites" ? null : (
        <IconContainer onClick={() => dispatch(addFavorite(postData))}>
          <i className="far fa-star"></i>
        </IconContainer>
      )}

      {parent === "feed" ? null : (
        <IconContainer onClick={iconClickHandler}>
          <i className="fas fa-times"></i>
        </IconContainer>
      )}
    </IconTrayContainer>
  );
};

export default IconTray;
