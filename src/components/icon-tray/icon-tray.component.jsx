import React from "react";

import { IconTrayContainer, IconContainer } from "./icon-tray.styles";

const IconTray = () => {
  return (
    <IconTrayContainer>
      <IconContainer>
        <IconContainer>
          <i className="far fa-bookmark"></i>
        </IconContainer>
        <IconContainer>
          <i className="far fa-star"></i>
        </IconContainer>
        <IconContainer>
          <i className="fas fa-times"></i>
        </IconContainer>
      </IconContainer>
    </IconTrayContainer>
  );
};

export default IconTray;
