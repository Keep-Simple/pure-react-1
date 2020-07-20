import React from 'react';

const Header = ({data}) => {

  let getLatest = new Date() - new Date(data[data.length - 1]?.date);
  getLatest = Math.floor(getLatest / (1000 * 60 * 60));
  const getUserCount = new Set(data.map(i => i.name)).size;

  return (
    <div style={{textAlign: "center", backgroundColor: "grey"}}>
      <div>Message count: {data.length}</div>
      <div>User count: {getUserCount}</div>
      <div>Latest message: {getLatest} hours ago</div>
    </div>
  );
}

export default Header;
