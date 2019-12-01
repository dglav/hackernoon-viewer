import React, { useState, useEffect } from "react";

import { selectFilteredPosts } from "../../context/posts/posts.selectors";

import PostCard from "../post-card/post-card.component";

const Feed = ({ searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetcher = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const response = await fetcher.json();

      const responseToDisplay = response.slice(0, 5);

      const posts = responseToDisplay.map(async postId => {
        const postFetcher = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
        );
        const postResponse = await postFetcher.json();
        return postResponse;
      });

      Promise.all(posts).then(resolvedPosts => {
        setPosts(resolvedPosts);
        setIsLoading(false);
        setFilteredPosts(resolvedPosts);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredPosts = selectFilteredPosts(posts, searchQuery);
    setFilteredPosts(filteredPosts);
  }, [searchQuery]);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading State</p>
      ) : (
        <div>
          {filteredPosts.map(post => {
            return <PostCard key={post.id} postData={post} parent="feed" />;
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default Feed;
