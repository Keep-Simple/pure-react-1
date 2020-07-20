import React from 'react';

const Header = ({data}) => {

  const getLatestMessageDate = Math.min(...data.map(i => new Date(i.createdAt).getHours()));
  const getUserCount = new Set(data.map(i => i.user)).size;

  return (
    <div style={{textAlign: "center", backgroundColor: "grey"}}>
      <div>Message count: {data.length}</div>
      <div>User count: {getUserCount}</div>
      <div>Latest message: {getLatestMessageDate} hours ago</div>
    </div>
  );
}

export default Header;
