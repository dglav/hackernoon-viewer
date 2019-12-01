import React, { createContext, useReducer } from "react";

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
};

export const PostsContext = createContext();

const PostsContextProvider = props => {
  const [posts, dispatch] = useReducer(postsReducer, { favorites: {} });
  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
