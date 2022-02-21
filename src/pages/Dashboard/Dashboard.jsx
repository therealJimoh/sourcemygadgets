import React from "react";
import { TextToggle } from "../../components";
import { Navbar, Sidebar, PageSummary, UserHeading, ProfileDetails } from "../../containers";
import * as X from "./dashboardStyle";

const Dashboard = () => {
  return (
    <>
      <X.DashboardContainer>
        <Navbar />
        <X.DashboardWrapper>
          <Sidebar />
          <div className="maincontent">
            <PageSummary />
            <X.UserDisplay>
              <div className="display">
                <TextToggle users="All Users" posts="All Posts" />
                <div className="mainwrapper">
                  <UserHeading />
                  <ProfileDetails />
                  <ProfileDetails />
                  <ProfileDetails />
                  <ProfileDetails />
                </div>
              </div>
              <div className="details"></div>
            </X.UserDisplay>
          </div>
        </X.DashboardWrapper>
      </X.DashboardContainer>
    </>
  );
};

export default Dashboard;
