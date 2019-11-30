import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import { PostCardContainer, Title, Subtitle } from "./post-card.styles";

const PostCard = ({
  postData: { by, time, title, url, score, descendants }
}) => {
  const theme = useContext(ThemeContext);
  return (
    <PostCardContainer>
      <Title>{title}</Title>
      <Subtitle theme={theme}>
        {score} | {by} | {time} | {descendants} comments |{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </Subtitle>
    </PostCardContainer>
  );
};

export default PostCard;
