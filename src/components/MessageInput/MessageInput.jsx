import React, {useState} from 'react';
import {Button, Form, Icon, Segment} from 'semantic-ui-react';
import './styles.css';
import {createMessageFromAdmin} from "../../mock/Admin";

const MessageInput = ({data, addData}) => {
  const [body, setBody] = useState('');

  const handlePost = () => {
    addData([...data, createMessageFromAdmin(body)]);
    setBody('');
  };

  return (
    <Segment clearing className="editSegment">
      <Form onSubmit={handlePost}>
        <Form.TextArea
          className="textArea"
          value={body}
          placeholder="What's happening?"
          onChange={ev => setBody(ev.target.value)}
        />
        <Button
          disabled={!body.length}
          primary
          style={{borderRadius: '30px'}}
          floated="right"
          type="submit"
          size="large"
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
