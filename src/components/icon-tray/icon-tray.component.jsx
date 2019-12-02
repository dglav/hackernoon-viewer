import React, { useContext, useState } from "react";
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
  const [bookmarkIconHover, setBookmarkIconHover] = useState(false);
  const [favoriteIconHover, setFavoriteIconHover] = useState(false);
  const [removeIconHover, setRemoveIconHover] = useState(false);

  const onIconHover = iconName => {
    if (iconName === "bookmarks") {
      setBookmarkIconHover(!bookmarkIconHover);
    } else if (iconName === "favorites") {
      setFavoriteIconHover(!favoriteIconHover);
    } else if (iconName === "remove") {
      console.log("in remove");
      setRemoveIconHover(!removeIconHover);
    }
  };

  return (
    <IconTrayContainer
      theme={theme}
      iconTrayVisibility={iconTrayVisibility}
      id="IconTray"
      className={`animated ${animation}`}
    >
      {parent === "bookmarks" ? null : (
        <IconContainer
          onClick={() => dispatch(addBookmark(postData))}
          onMouseEnter={() => onIconHover("bookmarks")}
          onMouseLeave={() => onIconHover("bookmarks")}
        >
          <i className={`${bookmarkIconHover ? "fas" : "far"} fa-bookmark`}></i>
        </IconContainer>
      )}

      {parent === "favorites" ? null : (
        <IconContainer
          onClick={() => dispatch(addFavorite(postData))}
          onMouseEnter={() => onIconHover("favorites")}
          onMouseLeave={() => onIconHover("favorites")}
        >
          <i className={`${favoriteIconHover ? "fas" : "far"} fa-star`}></i>
        </IconContainer>
      )}

      {parent === "feed" ? null : (
        <IconContainer
          onClick={iconClickHandler}
          onMouseEnter={() => onIconHover("remove")}
          onMouseLeave={() => onIconHover("remove")}
        >
          <i className={`fas fa-times ${removeIconHover ? "rotate" : ""}`}></i>
        </IconContainer>
      )}
    </IconTrayContainer>
  );
};

export default IconTray;
