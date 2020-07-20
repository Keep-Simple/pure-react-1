import React from 'react';

const Message = ({ms}) => {

  let prevDate = null;

  const insertDividerIfNeeded = ms => {
    let currentDate = new Date(ms.date);

    if (prevDate !== currentDate.getDay()) {
      return (
        <div>
          <hr/>
          <span>{`${currentDate.getDay()}/${currentDate.getUTCMonth()}/${currentDate.getFullYear()}`}</span>
          <hr/>
        </div>);
    }

    prevDate = currentDate.getDay();
  }

  return (
    <div>
      {insertDividerIfNeeded(ms)}
      <img src={ms.avatar} alt="avatar" style={{height: 45}}/>
      <strong>{ms.name}</strong>
      <p>{ms.text}</p>
    </div>
  );
}

export default Message;
