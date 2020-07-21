import React, {useState} from 'react';
import {Button, Comment, Confirm, Icon, Input} from "semantic-ui-react";
import './styles.css';
import moment from "moment";

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
      <Comment className={isAdmin ? "bubble mine" : "bubble"}>
        {!isAdmin && <Comment.Avatar as='a' src={ms.avatar}/>}
        <Comment.Content>
          <Comment.Author as="a">{ms.name}</Comment.Author>
          <Comment.Metadata>
            at {moment(new Date(ms.date)).format("LT")}
          </Comment.Metadata>
          <Comment.Text style={{marginTop: '10px'}}>
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
            {isAdmin && <div style={{marginTop: '4%'}}>
              <Comment.Action><span onClick={() => setDelModel(true)}>Delete</span></Comment.Action>
              <Comment.Action><span onClick={editHandler}>Edit</span></Comment.Action>
            </div>
            }
            {!isAdmin && <Comment.Action style={{userSelect: 'none', marginLeft: '96%'}}>
              <span onClick={likeHandler}>
                <Icon color={isLiked ? 'red' : 'grey'} name='like'/>
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
