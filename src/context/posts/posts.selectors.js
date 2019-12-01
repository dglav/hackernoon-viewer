export const selectFilteredPosts = (posts, searchQuery) => {
  searchQuery = searchQuery.toLowerCase();
  return searchQuery
    ? posts.filter(post => {
        if (
          post.title.toLowerCase().includes(searchQuery) !== false ||
          post.url.includes(searchQuery) !== false
        )
          return post;
      })
    : posts;
};
