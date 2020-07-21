import React from 'react';
import Message from "./Message";
import {Comment, Divider} from "semantic-ui-react";

const MessageList = ({data, editData}) => {

  let prevDate = null;

  const insertDividerIfNeeded = ms => {
    const mountDate = new Date(ms.date);

    if (prevDate?.getDay() !== mountDate.getDay()) {
      prevDate = mountDate;
      return (
        <Divider style={{margin: 5}} horizontal>
          {`${mountDate.getDate()}-${mountDate.getMonth()}-${mountDate.getFullYear()}`}
        </Divider>
      );
    }
    prevDate = mountDate;
  }

  return (
    <Comment.Group minimal size="large" style={{margin: '0 auto'}}>
      {data.map(ms => (
        <span key={ms.id}>
          {insertDividerIfNeeded(ms)}
          <Message ms={ms} data={data} editData={editData}/>
        </span>))}
    </Comment.Group>

  );
}

export default MessageList;
