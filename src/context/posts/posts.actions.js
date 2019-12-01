import postTypes from "./posts.types";

export const addFavorite = post => {
  return {
    type: postTypes.ADD_FAVORITE,
    payload: post
  };
};

export const deleteFavorite = postId => {
  return {
    type: postTypes.DELETE_FAVORITE,
    payload: postId
  };
};

export const addBookmark = post => {
  return {
    type: postTypes.ADD_BOOKMARK,
    payload: post
  };
};

export const deleteBookmark = postId => {
  return {
    type: postTypes.DELETE_BOOKMARK,
    payload: postId
  };
};
