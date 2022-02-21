import styled from "styled-components";

export const DashboardContainer = styled.div`
  /* height: 100vh; */
`;

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  .maincontent {
    width: 100%;
  }
`;

export const UserDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98.45%;
  margin: 44px 10px;
  .display {
    display: flex;
    flex-direction: column;
    width: 797px;
    padding-top: 21px;
    .mainwrapper {
      width: 100%;
      height: 300px;
      border-radius: 8px;
      background: #edeeef;
      margin-top: 15px;
      > * {
        margin-bottom: 8px;
      }
    }
  }
  .details {
    width: 276px;
    height: 358px;
    border: 0.693467px solid #c0c2c5;
    border-radius: 5.54774px;
  }
`;
