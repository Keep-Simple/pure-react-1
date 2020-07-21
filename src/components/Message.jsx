import React, {useState} from 'react';

const Message = ({ms, data, editData}) => {

  const [isEdited, setEdit] = useState(false);
  const [body, setBody] = useState(ms?.text);
  const [isLiked, setLiked] = useState(false);
  const ref = React.createRef();
  const isAdmin = ms.user_id === '12345';

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

  const deleteHandler = () => {
    editData(data.filter(i => i.id !== ms.id));
  }

  const editHandler = () => {
    if (isEdited) {
      editData(data.map(i => i.id === ms.id ? {...i, text: body, edit_data: new Date()} : i));
    }
    setEdit(!isEdited);
  }

  const likeHandler = () => {
    ref.current.style.backgroundColor = !isLiked ? 'red' : 'white';
    setLiked(!isLiked);
  }


  return (
    <div>
      {insertDividerIfNeeded(ms)}
      {!isAdmin && <img src={ms.avatar} alt="avatar" style={{height: 45}}/>}
      <strong>{ms.name}</strong>
      <p>{currentDate.toLocaleTimeString()}</p>
      {isEdited ? <input type="text" value={body} onChange={e => setBody(e.target.value)}/> : <p>{ms.text}</p>}
      {isAdmin &&
      <>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={editHandler}>Edit</button>
      </>}
      {!isAdmin && <button ref={ref} onClick={likeHandler}>Like</button>}
    </div>
  );
}

export default Message;
