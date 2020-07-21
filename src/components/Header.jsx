import React from 'react';
import {Header as HeaderUI, Segment} from "semantic-ui-react";


const Header = ({data}) => {

  if (data) {
    let getLatest = new Date(data[data.length - 1]?.date);
    const getUserCount = new Set(data.map(i => i.name)).size;

    return (
      <Segment style={{position: ''}} clearing>
        <HeaderUI floated='right'>
          latest message at {getLatest.toLocaleTimeString()}
        </HeaderUI>
        <HeaderUI floated='left'>
          <div>{data?.length} messages</div>
          <div>{getUserCount} participants</div>
        </HeaderUI>
      </Segment>
    );
  }
  return null;
}

export default Header;
