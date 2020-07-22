import React, {useState} from 'react';
import {Button, Comment, Confirm, Icon, Input} from "semantic-ui-react";
import moment from "moment";
import './styles.css';
import admin from '../../mock/Admin';

const Message = ({ms, data, editData}) => {

  const [isEdited, setEdit] = useState(false);
  const [body, setBody] = useState(ms?.text);
  const [isLiked, setLiked] = useState(false);
  const [delOpen, setDelModel] = useState(false);
  const isAdmin = ms.user_id === admin.user_id;

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

  const actions = () => {
    if (isAdmin) {
      return (
        <Comment.Actions style={{marginTop: '4%'}}>
          <Comment.Action onClick={() => setDelModel(true)}>Delete</Comment.Action>
          <Comment.Action onClick={editHandler}>Edit</Comment.Action>
        </Comment.Actions>);
    }

    return (
      <Comment.Actions>
        <Comment.Action onClick={likeHandler} style={{userSelect: 'none', marginLeft: '96%'}}>
          <Icon color={isLiked ? 'red' : 'grey'} name='like'/>
        </Comment.Action>
      </Comment.Actions>
    );
  }

  return (
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
                icon={
                  <Button icon onClick={editHandler} disabled={!body}>
                    <Icon name='check'/>
                  </Button>}
                value={body}
                onChange={e => setBody(e.target.value)}/>
              : ms.text}
        </Comment.Text>
        {actions()}
      </Comment.Content>
      <Confirm
        style={{borderRadius: 30, padding: 10}}
        confirmButton='Delete'
        content='Delete this message?'
        size='mini'
        open={delOpen}
        onCancel={() => setDelModel(false)}
        onConfirm={deleteHandler}
      />
    </Comment>
  );
}

export default Message;
