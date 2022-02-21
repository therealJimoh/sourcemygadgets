import React from "react";
import { DisplayDetails } from "../../components";
import * as X from "./profiledetailsStyle";
import kehinde from "../../assets/image/kehinde.png";

const ProfileDetails = () => {
  return (
    <X.ProfileContainer>
      <DisplayDetails
        image={kehinde}
        title="mr"
        name="kehinde"
        surname="adebisi"
        identity="60d21b4667d0d8992e610c85"
      />
    </X.ProfileContainer>
  );
};

export default ProfileDetails;
