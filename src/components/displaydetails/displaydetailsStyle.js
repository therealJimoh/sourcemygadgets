import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  margin: 12px;
  align-items: center;
  justify-content: center;
  > * {
      &:first-child {
         margin-left: 17px ;
         margin-right: 23px;
      }
  }
  h5 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 11px;
    line-height: 117%;
    color: #787878;
    text-transform: uppercase;
    margin-right: 48px;
  }
`;

