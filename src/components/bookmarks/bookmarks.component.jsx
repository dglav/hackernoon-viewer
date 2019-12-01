import React, { useContext, useEffect, useState } from "react";

import { selectFilteredPosts } from "../../context/posts/posts.selectors";

import { PostsContext } from "../../context/posts/posts.context";
import { deleteBookmark } from "../../context/posts/posts.actions";

import {} from "./bookmarks.styles";

import PostCard from "../post-card/post-card.component";

const Favorites = ({ searchQuery }) => {
  const {
    posts: { bookmarks },
    dispatch
  } = useContext(PostsContext);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = selectFilteredPosts(bookmarks, searchQuery);
    setFilteredPosts(filteredPosts);
  }, [bookmarks, searchQuery]);

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
        <p>No bookmarks</p>
      )}
    </React.Fragment>
  );
};

export default Favorites;
