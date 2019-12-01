import React, { createContext, useReducer } from "react";
import postTypes from "./posts.types";

const postsReducer = (state, action) => {
  switch (action.type) {
    case postTypes.ADD_FAVORITE:
      const id = action.payload.id;
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
      const favoriteId = action.payload;
      const favorites = state.favorites.filter(favorite => {
        if (favorite.id !== favoriteId) return favorite;
      });
      return {
        ...state,
        favorites: favorites
      };
    default:
      return state;
  }
};

export const PostsContext = createContext();

const PostsContextProvider = props => {
  const [posts, dispatch] = useReducer(postsReducer, { favorites: [] });
  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
