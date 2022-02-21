import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  .text {
    display: flex;
    > * {
      &:first-child {
        font-family: var(--font-family);
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        color: #4799eb;
        margin: 0px 10px;
      }
    }
  }
  p {
    font-family: var(--font-family);
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #607485;
    margin: 0px 10px;
  }
`;
