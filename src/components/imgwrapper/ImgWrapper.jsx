import React from 'react'
import * as X from "./imgwrapperStyle"


const ImgWrapper = ({ image, alte }) => {
  return (
    <>
      <X.ImgContainer >
        <img src={image} alt={alte} />
      </X.ImgContainer>
    </>
  )
}

export default ImgWrapper