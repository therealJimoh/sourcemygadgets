import React from 'react'
import { Summary } from '../../components';
import * as X from "./pagesummaryStyle";
import user from "../../assets/svg/user.svg";
import posts from "../../assets/svg/posts.svg";
import comments from "../../assets/svg/comments.svg";

const PageSummary = () => {
  return (
    <X.PageSummaryCont>
        <div className="summaryWrapper">
            <Summary img={user} num="67" desc="users" />
            <Summary img={posts} num="495" desc="posts" />
            <Summary img={comments} num="6459" desc="comments" />
        </div>
    </X.PageSummaryCont>
  )
}

export default PageSummary