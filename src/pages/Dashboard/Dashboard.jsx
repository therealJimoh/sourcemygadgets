import React from 'react'
import { Navbar, Sidebar } from '../../containers';
import * as X from "./dashboardStyle";

const Dashboard = () => {
  return (
    <>
      <X.DashboardContainer>
          <Navbar />
        <X.DashboardWrapper>
          <Sidebar />
        </X.DashboardWrapper>
      </X.DashboardContainer>
    </>
  )
}

export default Dashboard