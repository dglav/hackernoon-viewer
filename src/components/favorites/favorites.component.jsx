import React, { useContext, useEffect, useState } from "react";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteFavorite } from "../../context/posts/posts.actions";
import { selectFilteredPosts } from "../../context/posts/posts.selectors";

import {} from "./favorites.styles";

import PostCard from "../post-card/post-card.component";

const Favorites = ({ searchQuery }) => {
  const {
    posts: { favorites },
    dispatch
  } = useContext(PostsContext);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = selectFilteredPosts(favorites, searchQuery);
    setFilteredPosts(filteredPosts);
  }, [searchQuery]);

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
        <p>No favorites</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
