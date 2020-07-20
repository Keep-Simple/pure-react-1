import React from 'react';
import Message from "./Message";

const MessageList = ({data}) => {

  return (
    <div>
      {data.map(ms => (<Message key={ms.id} ms={ms}/>))}
    </div>
  );
}

export default MessageList;
