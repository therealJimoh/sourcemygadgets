import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  width: 368px;
  height: 84px;
  background: #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5.40323px;
`;


export const SummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  > * {
    &:first-child {
      margin: 0 16.21px 0 24px;
    }
  }
  h3 {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 10.1341px;
    line-height: 12px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #97a7b4;
  }
  h2 {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 24.3218px;
    line-height: 29px;
    color: #051a2e;
  }
`;
