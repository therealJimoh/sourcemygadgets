import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: sticky;
  z-index: 10;
  width: 116px;
  height: 100vh;
  background: #051a2e;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  h4 {
    font-family: var(--font-family);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-top: 8px;
  }
`;
