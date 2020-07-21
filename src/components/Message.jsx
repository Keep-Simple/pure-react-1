import React, {useState} from 'react';
import {Button, Comment, Confirm, Icon, Input} from "semantic-ui-react";

const Message = ({ms, data, editData}) => {

  const [isEdited, setEdit] = useState(false);
  const [body, setBody] = useState(ms?.text);
  const [isLiked, setLiked] = useState(false);
  const [delOpen, setDelModel] = useState(false);
  const isAdmin = ms.user_id === '12345';

  const deleteHandler = () => {
    editData(data.filter(i => i.id !== ms.id));
  }

  const editHandler = () => {
    if (isEdited && !!body) {
      editData(data.map(i => i.id === ms.id ? {...i, text: body, edit_data: new Date()} : i));
    }
    setEdit(!isEdited);
  }

  const likeHandler = () => {
    setLiked(!isLiked);
  }

  return (
    <>
      <Comment style={isAdmin ? {padding: '1% 0 1% 50%'} : {padding: '1% 0 1% 0'}}>
        {!isAdmin && <Comment.Avatar as='a' src={ms.avatar}/>}
        <Comment.Content>
          <Comment.Author as="a">{ms.name}</Comment.Author>
          <Comment.Metadata>
            at {new Date(ms.date).toLocaleTimeString()}
          </Comment.Metadata>
          <Comment.Text>
            {isEdited ? <Input
                focus
                error={!body}
                icon={<Button icon onClick={editHandler} disabled={!body}>
                  <Icon name='check'/>
                </Button>}
                value={body}
                onChange={e => setBody(e.target.value)}/>
              : ms.text}
          </Comment.Text>
          <Comment.Actions>
            {isAdmin && <>
              <Comment.Action><span onClick={editHandler}>Edit</span></Comment.Action>
              <Comment.Action><span onClick={() => setDelModel(true)}>Delete</span></Comment.Action>
            </>}
            {!isAdmin && <Comment.Action>
              <span style={{userSelect: 'none'}} onClick={likeHandler}>
                <Icon color={isLiked ? 'red' : 'grey'} name='like'/>Like
              </span>
            </Comment.Action>}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
      <Confirm
        confirmButton='Delete'
        content='Delete this message?'
        size='mini'
        open={delOpen}
        onCancel={() => setDelModel(false)}
        onConfirm={deleteHandler}
      />
    </>
  );
}

export default Message;
