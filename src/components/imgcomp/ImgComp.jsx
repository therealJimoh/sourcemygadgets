import React from 'react'
import * as X from "./imgcompStyle";


const ImgComp = ({ img, alte}) => {
  return (
    <>
      <X.ImgComp >
        <img src={img} alt={alte} />
      </X.ImgComp>
    </>
  )
}

export default ImgComp