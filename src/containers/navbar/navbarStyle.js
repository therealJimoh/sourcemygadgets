import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  padding: 25px 20px;
  background: #ffffff;
  width: 100%;
  height: 80px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const NavbarWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: 0;
  h1 {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #051a2e;
  }
`;
