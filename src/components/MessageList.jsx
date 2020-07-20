import React from 'react';
import Message from "./Message";

const MessageList = ({data, editData}) => {

  return (
    <div>
      {data.map(ms => (<Message key={ms.id} ms={ms} data={data} editData={editData}/>))}
    </div>
  );
}

export default MessageList;
