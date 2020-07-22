import React from 'react';
import Message from "../Message/Message";
import {Comment} from "semantic-ui-react";
import moment from "moment";
import './styles.css';

const MessageList = ({data, editData}) => {

  let prevDate = null;

  const insertDividerIfNeeded = ms => {
    const mountDate = new Date(ms.date);

    if (prevDate?.getDay() !== mountDate.getDay()) {
      prevDate = mountDate;
      return (
        <div className="timestamp">
          {moment(mountDate).format('LLLL')}
        </div>
      );
    }
    prevDate = mountDate;
  }

  return (
    <Comment.Group size="large" style={{margin: '0 auto'}}>
      {data.map(ms => (
        <span key={ms.id}>
          {insertDividerIfNeeded(ms)}
          <Message ms={ms} data={data} editData={editData}/>
        </span>))}
    </Comment.Group>

  );
}

export default MessageList;
