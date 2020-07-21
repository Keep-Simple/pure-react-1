import React from 'react';
import Message from "./Message";
import {Comment} from "semantic-ui-react";

const MessageList = ({data, editData}) => {

  return (
    <Comment.Group size="large">
      {data.map(ms => (<Message key={ms.id} ms={ms} data={data} editData={editData}/>))}
    </Comment.Group>

  );
}

export default MessageList;
