import React from "react";
import { Navbar, Sidebar } from "../../containers";
import PageSummary from "../../containers/pagesummary/PageSummary";
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
          </div>
        </X.DashboardWrapper>
      </X.DashboardContainer>
    </>
  );
};

export default Dashboard;
