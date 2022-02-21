import React from 'react'
import { ImgWrapper } from '..';
import { Checkbox } from '../displaytitle/DisplayTitle';
import * as X from "./displaydetailsStyle";

const DisplayDetails = ({ image, title, name, surname, identity }) => {
  return (
    <X.DisplayContainer>
        <Checkbox />
        <ImgWrapper image={image} />
        <h5>{title}</h5>
        <h5>{name}</h5>
        <h5>{surname}</h5>
        <h5>{identity}</h5>
    </X.DisplayContainer>
  )
}

export default DisplayDetails