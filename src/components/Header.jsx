import React from 'react';
import {Segment} from "semantic-ui-react";

const Header = ({data}) => {

  let getLatest = new Date() - new Date(data[data.length - 1]?.date);
  getLatest = Math.floor(getLatest / (1000 * 60 * 60));
  const getUserCount = new Set(data.map(i => i.name)).size;

  return (
    <Segment>
      <div>Message count: {data.length}</div>
      <div>User count: {getUserCount}</div>
      <div>Latest message: {getLatest} hours ago</div>
    </Segment>
  );
}

export default Header;
