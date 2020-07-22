import React from 'react';
import './styles.css';
import moment from "moment";

const Header = ({data}) => {

  let getLatest = new Date(data[data.length - 1]?.date);
  const getUserCount = new Set(data.map(i => i.name)).size;

  return (
    <div className="toolbar">
      <div className="left-items">
        {data?.length}&nbsp;<i className="comments icon"/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {getUserCount}&nbsp;<i className="male icon"/>
      </div>
      <h1 className="toolbar-title">
        <i className="facebook messenger icon"/>
        Tweety
      </h1>
      <div className="right-items">
        <span>
        latest at {moment(getLatest).format("HH:mm")}
          &nbsp;
          <i className="clock icon"/>
        </span>
      </div>
    </div>
  );
}

export default Header;
