import React from 'react';

const MessageList = () => {

  const messages = ["My first", "My Second", "Yet final", "Not yet", "That's it"];

  return (
    <div>
      {messages.map(m => <div>{m}</div>)}
    </div>
  );
}

export default MessageList;
