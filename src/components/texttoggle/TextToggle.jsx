import React from "react";
import * as X from "./texttoggleStyle";

const TextToggle = ({ users, posts }) => {
  return (
    <X.TextContainer>
      <div className="text">
        <p>{users}</p>
        <p>{posts}</p>
      </div>
    </X.TextContainer>
  );
};

export default TextToggle;
