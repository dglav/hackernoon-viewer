import React, { useContext } from "react";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteBookmark } from "../../context/posts/posts.actions";

import {} from "./bookmarks.styles";

import PostCard from "../post-card/post-card.component";

const Favorites = () => {
  const {
    posts: { bookmarks },
    dispatch
  } = useContext(PostsContext);

  return (
    <React.Fragment>
      {bookmarks.length ? (
        bookmarks.map(post => {
          return (
            <PostCard
              key={post.id}
              postData={post}
              parent="bookmarks"
              iconClickHandler={() => dispatch(deleteBookmark(post.id))}
            />
          );
        })
      ) : (
        <p>No bookmarks</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
