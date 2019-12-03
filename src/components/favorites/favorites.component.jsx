import React, { useContext } from "react";

import { useFilteredPosts } from "../../hooks/hooks";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteFavorite } from "../../context/posts/posts.actions";

import PostCard from "../post-card/post-card.component";

const Favorites = ({ searchQuery }) => {
  const {
    posts: { favorites },
    dispatch
  } = useContext(PostsContext);

  const filteredPosts = useFilteredPosts(favorites, searchQuery);

  return (
    <React.Fragment>
      {filteredPosts.length ? (
        filteredPosts.map(post => {
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
        <p>No favorites to display. Login and add some!</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
