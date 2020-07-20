import React from 'react';

const Message = ({ms}) => {

  let prevDate = null;
  let currentDate = new Date(ms.date);

  const insertDividerIfNeeded = ms => {
    currentDate = new Date(ms.date);

    if (prevDate?.getDay() !== currentDate.getDay()) {
      return (
        <div>
          <hr/>
          <span>{`${currentDate.getUTCDay()}/${currentDate.getUTCMonth()}/${currentDate.getFullYear()}`}</span>
          <hr/>
        </div>);
    }

    prevDate = currentDate;
  }

  return (
    <div>
      {insertDividerIfNeeded(ms)}
      <img src={ms.avatar} alt="avatar" style={{height: 45}}/>
      <strong>{ms.name}</strong>
      <p>{currentDate.toLocaleTimeString()}</p>
      <p>{ms.text}</p>
    </div>
  );
}

export default Message;
