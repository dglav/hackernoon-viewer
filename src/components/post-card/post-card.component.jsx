import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import {
  PostCardContainer,
  Title,
  Subtitle,
  IconTray,
  IconContainer
} from "./post-card.styles";

TimeAgo.addLocale(en);

const PostCard = ({
  postData: { id, by, time, title, url, score, descendants }
}) => {
  const theme = useContext(ThemeContext);

  const timeAgo = new TimeAgo("en-US");
  const formattedTimeAgo = timeAgo.format(time * 1000);
  const commentUrl = `https://news.ycombinator.com/item?id=${id}`;
  const [iconTrayDisplay, setIconTrayDisplay] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState("");

  const toggleHover = hoverState => {
    if (hoverState) {
      setIconTrayDisplay(true);
      setSlideAnimation("slideInRight");
    } else {
      setSlideAnimation("slideOutRight");
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
        theme={theme}
        iconTrayDisplay={iconTrayDisplay}
        id="IconTray"
        className={`animated ${slideAnimation}`}
      >
        <IconContainer>
          <i className="far fa-bookmark"></i>
        </IconContainer>
        <IconContainer>
          <i className="far fa-star"></i>
        </IconContainer>
        <IconContainer>
          <i className="fas fa-times"></i>
        </IconContainer>
      </IconTray>
    </PostCardContainer>
  );
};

export default PostCard;
