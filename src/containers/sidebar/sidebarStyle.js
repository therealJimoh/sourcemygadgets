import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 116px;
  height: 768px;
  background: #051a2e;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-family: var(--font-family);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }
`;
