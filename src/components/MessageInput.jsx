import React, {useState} from 'react';
import {Button, Form, Icon, Segment} from 'semantic-ui-react';

const MessageInput = ({data, addData}) => {
  const [body, setBody] = useState('');

  const handlePost = () => {
    addData([...data, {
      name: 'Keep Simple',
      text: body,
      date: new Date().getUTCDate(),
      user_id: '12345',
      id: Math.random() * 100,
      avatar: 'https://robohash.org/quamestlaborum.png?size=50x50&set=set1'
    }]);
    setBody('');
  };

  return (
    <Segment style={{borderRadius: '15px', height: '150px', margin: '30px'}}>
      <Form onSubmit={handlePost}>
        <Form.TextArea
          style={{border: 'none'}}
          name="body"
          value={body}
          placeholder="What's happening?"
          onChange={ev => setBody(ev.target.value)}
        />
        <Button
          disabled={!body.length}
          inverted
          primary
          style={{borderRadius: '30px'}}
          floated="right"
          type="submit"
          size="large"
          animated
        >
          <Button.Content visible>Send</Button.Content>
          <Button.Content hidden><Icon name="arrow right"/></Button.Content>
        </Button>
      </Form>
    </Segment>
  );
};

export default MessageInput;
