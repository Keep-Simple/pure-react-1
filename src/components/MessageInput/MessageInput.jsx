import React, {useState} from 'react';
import {Button, Form, Icon, Segment} from 'semantic-ui-react';
import './styles.css';
import {createMessageFromAdmin} from "../../mock/Admin";

const MessageInput = ({addData}) => {
  const [body, setBody] = useState('');

  const handlePost = e => {
    e.preventDefault();
    addData(data => [...data, createMessageFromAdmin(body)]);
    setBody('');
  };

  return (
    <Segment clearing className="editSegment">
      <Form onSubmit={handlePost}>
        <Form.TextArea
          onKeyPress={e => e.key === "Enter" && !e.shiftKey && handlePost(e)}
          autoFocus
          className="textArea"
          value={body}
          placeholder="What's happening?"
          onChange={ev => setBody(ev.target.value)}
        />
        <Button
          disabled={!body.length}
          className="inputButton"
          floated="right"
          type="submit"
          size="big"
          animated="vertical"
        >
          <Button.Content visible><b>Send</b></Button.Content>
          <Button.Content hidden><Icon name="arrow up"/></Button.Content>
        </Button>
      </Form>
    </Segment>
  );
};

export default MessageInput;
