import React from "react";
import { ImgComp } from "..";
import * as X from "./summaryStyle";


const Summary = ({img, desc, num }) => {
  return (
    <X.SummaryContainer>
      <X.SummaryWrapper>
        <ImgComp img={img} />
        <div className="summarycontent">
            <h3>{desc}</h3>
            <h2>{num}</h2>
        </div>
      </X.SummaryWrapper>
    </X.SummaryContainer>
  );
};

export default Summary;
