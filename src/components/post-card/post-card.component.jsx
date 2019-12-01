import React, { useContext, useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import IconTray from "../icon-tray/icon-tray.component";

import { ThemeContext } from "../../context/theme/theme.context";

import { PostCardContainer, Title, Subtitle } from "./post-card.styles";

TimeAgo.addLocale(en);

const PostCard = ({ postData, parent }) => {
  const { id, by, time, title, url, score, descendants } = postData;
  const theme = useContext(ThemeContext);

  const timeAgo = new TimeAgo("en-US");
  const formattedTimeAgo = timeAgo.format(time * 1000);
  const commentUrl = `https://news.ycombinator.com/item?id=${id}`;

  const [iconTrayDisplay, setIconTrayDisplay] = useState(false);
  const [iconTrayAnimation, setIconTrayAnimation] = useState("");

  const toggleHover = hoverState => {
    if (hoverState) {
      setIconTrayDisplay(true);
      setIconTrayAnimation("slideInRight");
    } else {
      setIconTrayAnimation("slideOutRight");
    }
  };

  return (
    <PostCardContainer
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div id="content">
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
      </div>
      <IconTray
        postData={postData}
        parent={parent}
        iconTrayDisplay={iconTrayDisplay}
        animation={iconTrayAnimation}
      />
    </PostCardContainer>
  );
};

export default PostCard;
