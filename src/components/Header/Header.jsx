import React from 'react';
import './header.css';

const Header = ({data}) => {

  let getLatest = new Date(data[data.length - 1]?.date);
  const getUserCount = new Set(data.map(i => i.name)).size;

  return (
    <div className="toolbar">
      <div className="left-items">
        {data?.length} messages
        &nbsp;
        {getUserCount} participants
      </div>
      <h1 className="toolbar-title">Tweety chat</h1>
      <div className="right-items">latest message at {getLatest.toLocaleTimeString()}</div>
    </div>
  );
}

export default Header;
