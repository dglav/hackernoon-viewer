import React, { useContext } from "react";

import { useFilteredPosts } from "../../hooks/hooks";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteBookmark } from "../../context/posts/posts.actions";

import PostCard from "../post-card/post-card.component";

const Favorites = ({ searchQuery }) => {
  const {
    posts: { bookmarks },
    dispatch
  } = useContext(PostsContext);

  const filteredPosts = useFilteredPosts(bookmarks, searchQuery);

  return (
    <React.Fragment>
      {filteredPosts.length ? (
        filteredPosts.map(post => {
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
        <p>No bookmarks to display. Login and add some!</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
