import React, { useState, useEffect } from "react";

export function useFilteredPosts(collection, searchQuery) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    searchQuery = searchQuery.toLowerCase();
    if (searchQuery) {
      setFilteredPosts(
        collection.filter(post => {
          if (
            post.title.toLowerCase().includes(searchQuery) !== false ||
            post.url.includes(searchQuery) !== false
          )
            return post;
        })
      );
    } else {
      setFilteredPosts(collection);
    }
  }, [collection, searchQuery]);

  return filteredPosts;
}
