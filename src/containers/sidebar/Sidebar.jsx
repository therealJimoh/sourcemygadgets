import React from 'react'
import { ImgWrapper } from '../../components';
import * as X from "./sidebarStyle";
import adduser from "../../assets/svg/adduser.svg"

const Sidebar = () => {
  return (
    <>
      <X.SidebarContainer>
        <X.SidebarWrapper>
          <ImgWrapper image={adduser} />
          <h4>add user</h4>
        </X.SidebarWrapper>
      </X.SidebarContainer>
    </>
  )
}

export default Sidebar