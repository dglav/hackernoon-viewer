import React, { useContext } from "react";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteFavorite } from "../../context/posts/posts.actions";

import {} from "./favorites.styles";

import PostCard from "../post-card/post-card.component";

const Favorites = () => {
  const {
    posts: { favorites },
    dispatch
  } = useContext(PostsContext);

  return (
    <React.Fragment>
      {favorites.length ? (
        favorites.map(post => {
          return (
            <PostCard
              key={post.id}
              postData={post}
              parent="favorites"
              iconClickHandler={() => dispatch(deleteFavorite(post.id))}
            />
          );
        })
      ) : (
        <p>No favorites</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
