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
