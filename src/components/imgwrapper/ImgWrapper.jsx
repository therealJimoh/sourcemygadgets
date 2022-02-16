import React from 'react'
import * as X from "./imgwrapperStyle"

const ImgWrapper = ({ image, alt }) => {
  return (
    <>
      <X.ImgContainer>
        <img src={image} alt={alt} />
      </X.ImgContainer>
    </>
  )
}

export default ImgWrapper