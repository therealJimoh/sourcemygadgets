import React from 'react'
import * as X from "./displaytitleStyle";


export const Checkbox = () => {
    return (
        <X.ChecboxContainer />
    )
}

const DisplayTitle = ({ title, firstname, lastname, id }) => {
  return (
    <X.TitleContainer>
        <Checkbox />
        <h5>{title}</h5>
        <h5>{firstname}</h5>
        <h5>{lastname}</h5>
        <h5>{id}</h5>
    </X.TitleContainer>
  )
}

export default DisplayTitle