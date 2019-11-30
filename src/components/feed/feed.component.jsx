import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import { FeedContainer } from "./feed.styles";

import PostCard from "../post-card/post-card.component";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetcher = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const response = await fetcher.json();

      const responseToDisplay = response.slice(0, 2);

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

  return (
    <FeedContainer theme={theme}>
      {isLoading ? (
        <p>Loading State</p>
      ) : (
        <div>
          {posts.map(post => {
            return <PostCard key={post.id} postData={post} />;
          })}
        </div>
      )}
    </FeedContainer>
  );
};

export default Feed;
