import React, { createContext, useReducer } from "react";
import postTypes from "./posts.types";

const postsReducer = (state, action) => {
  let id;
  let postId;

  switch (action.type) {
    case postTypes.ADD_FAVORITE:
      id = action.payload.id;
      const favoriteIds = state.favorites.map(favorite => {
        return favorite.id;
      });
      if (favoriteIds.includes(id)) {
        return { ...state };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      }
    case postTypes.DELETE_FAVORITE:
      postId = action.payload;
      const favorites = state.favorites.filter(favorite => {
        if (favorite.id !== postId) return favorite;
      });
      return {
        ...state,
        favorites: favorites
      };
    case postTypes.ADD_BOOKMARK:
      id = action.payload.id;
      const bookmarkIds = state.bookmarks.map(bookmark => {
        return bookmark.id;
      });
      if (bookmarkIds.includes(id)) {
        return { ...state };
      } else {
        return {
          ...state,
          bookmarks: [...state.bookmarks, action.payload]
        };
      }
    case postTypes.DELETE_BOOKMARK:
      postId = action.payload;
      const bookmarks = state.bookmarks.filter(bookmark => {
        if (bookmark.id !== postId) return bookmark;
      });
      return {
        ...state,
        bookmarks: bookmarks
      };
    default:
      return state;
  }
};

export const PostsContext = createContext();

const PostsContextProvider = props => {
  const [posts, dispatch] = useReducer(postsReducer, {
    favorites: [],
    bookmarks: []
  });
  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
