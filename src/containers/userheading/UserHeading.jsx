import React from "react";
import { DisplayTitle } from "../../components";
import * as X from "./userheadingStyle";

const UserHeading = () => {
  return (
    <X.UserHeadCont>
      <DisplayTitle
        title="title"
        firstname="firstname"
        lastname="lastname"
        id="id"
      />
    </X.UserHeadCont>
  );
};

export default UserHeading;
