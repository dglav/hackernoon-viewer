import React from "react";

import { PostCardContainer, Title, Subtitle } from "./post-card.styles";

const PostCard = ({
  postData: { by, time, title, url, score, descendants }
}) => {
  return (
    <PostCardContainer>
      <Title>{title}</Title>
      <Subtitle>
        {score} | {by} | {time} | {descendants} comments |{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </Subtitle>
    </PostCardContainer>
  );
};

export default PostCard;
