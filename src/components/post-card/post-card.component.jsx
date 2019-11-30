import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { PostCardContainer, Title, Subtitle } from "./post-card.styles";

TimeAgo.addLocale(en);

const PostCard = ({
  postData: { id, by, time, title, url, score, descendants }
}) => {
  const theme = useContext(ThemeContext);
  const timeAgo = new TimeAgo("en-US");
  const formattedTimeAgo = timeAgo.format(time * 1000);
  const commentUrl = `https://news.ycombinator.com/item?id=${id}`;
  return (
    <PostCardContainer>
      <Title>{title}</Title>
      <Subtitle theme={theme}>
        {score} points | {by} | {formattedTimeAgo} |{" "}
        <a href={commentUrl} target="_blank">
          {descendants} comments
        </a>{" "}
        |{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </Subtitle>
    </PostCardContainer>
  );
};

export default PostCard;
