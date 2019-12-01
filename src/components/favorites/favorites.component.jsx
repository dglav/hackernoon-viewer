import React, { useContext } from "react";
import { PostsContext } from "../../context/posts.context";

import {} from "./favorites.styles";

import PostCard from "../post-card/post-card.component";

const Favorites = () => {
  const {
    posts: { favorites }
  } = useContext(PostsContext);

  return (
    <React.Fragment>
      {Object.entries(favorites).length ? (
        favorites.map(post => {
          return <PostCard key={post.id} postData={post} />;
        })
      ) : (
        <p>No favorites</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
