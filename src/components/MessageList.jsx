import React from 'react';
import Message from "./Message";

const MessageList = ({data}) => {

  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      {data.map(ms => (<Message key={ms.id} ms={ms}/>))}
    </div>
  );
}

export default MessageList;
