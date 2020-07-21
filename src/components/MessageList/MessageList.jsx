import React, {useEffect, useRef} from 'react';
import Message from "../Message/Message";
import {Comment} from "semantic-ui-react";
import moment from "moment";
import './styles.css';

const MessageList = ({data, editData}) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"})
  }

  useEffect(scrollToBottom, [data.length]);

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
    <Comment.Group minimal size="large" style={{margin: '0 auto'}}>
      {data.map(ms => (
        <span key={ms.id}>
          {insertDividerIfNeeded(ms)}
          <Message ms={ms} data={data} editData={editData}/>
        </span>))}
      <div ref={messagesEndRef}/>
    </Comment.Group>

  );
}

export default MessageList;
