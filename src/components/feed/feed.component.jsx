import React, { useState, useEffect } from "react";

import { useFilteredPosts } from "../../hooks/hooks";

import PostCard from "../post-card/post-card.component";

const Feed = ({ searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

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
      });
    }
    fetchData();
  }, []);

  const filteredPosts = useFilteredPosts(posts, searchQuery);

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
