import React, { createContext, useReducer } from "react";
import postTypes from "./posts.types";

const addPostToList = (posts, postToAdd) => {
  const postIds = posts.map(post => {
    return post.id;
  });
  return postIds.includes(postToAdd.id) ? posts : [...posts, postToAdd];
};

const removePostFromList = (posts, postIdToRemove) => {
  const updatedPostList = posts.filter(post => {
    if (post.id !== postIdToRemove) return post;
  });
  return updatedPostList;
};

const postsReducer = (state, action) => {
  let favoritesList = [];
  let bookmarksList = [];

  switch (action.type) {
    case postTypes.ADD_FAVORITE:
      favoritesList = addPostToList(state.favorites, action.payload);
      return {
        ...state,
        favorites: favoritesList
      };
    case postTypes.DELETE_FAVORITE:
      favoritesList = removePostFromList(state.favorites, action.payload);
      return {
        ...state,
        favorites: favoritesList
      };
    case postTypes.ADD_BOOKMARK:
      bookmarksList = addPostToList(state.bookmarks, action.payload);
      return {
        ...state,
        bookmarks: bookmarksList
      };
    case postTypes.DELETE_BOOKMARK:
      bookmarksList = removePostFromList(state.bookmarks, action.payload);
      return {
        ...state,
        bookmarks: bookmarksList
      };
    default:
      return state;
  }
};

export const PostsContext = createContext();

const PostsContextProvider = props => {
  const [posts, dispatch] = useReducer(postsReducer, {
    feedPosts: [],
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
