import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import MessageInput from "./components/MessageInput/MessageInput";
import MessageList from "./components/MessageList/MessageList";
import jsonData from "./mock/MOCK_DATA.json"
import {Dimmer, Loader} from "semantic-ui-react";

const Chat = () => {

  const [store, setStore] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios(
    //     'https://api.npoint.io/b919cb46edac4c74d0a8',
    //   );
    //
    // };
    setTimeout(() => {
      setStore(jsonData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      setLoading(!isLoading);
    }, 100);
    // fetchData();
  }, []);

  console.log(store);
  return (
    <>
      {isLoading &&
      <Dimmer active>
        <Loader/>
      </Dimmer>}
      <Header data={store}/>
      <MessageList data={store} editData={setStore}/>
      <MessageInput data={store} addData={setStore}/>
    </>
  );
}

export default Chat;
