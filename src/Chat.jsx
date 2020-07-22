import React, {useEffect, useRef, useState} from 'react';
import Header from "./components/Header/Header";
import MessageInput from "./components/MessageInput/MessageInput";
import MessageList from "./components/MessageList/MessageList";
import jsonData from "./mock/MOCK_DATA.json"
import {Dimmer, Loader} from "semantic-ui-react";

const Chat = () => {
  const [store, setStore] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current.scrollIntoView({behavior: "smooth"});
  }

  useEffect(scrollToBottom, [store.length]);

  useEffect(() => {
    setTimeout(() => {
      setStore(jsonData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      setLoading(!isLoading);
    }, 200);
  }, []);

  return (
    <>
      {isLoading &&
      <Dimmer active>
        <Loader/>
      </Dimmer>}
      <Header data={store}/>
      <MessageList data={store} editData={setStore}/>
      <div ref={endRef}/>
      <MessageInput data={store} addData={setStore}/>
    </>
  );
}

export default Chat;
