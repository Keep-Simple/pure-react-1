import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import * as axios from "axios";
import jsonData from "./mock/MOCK_DATA.json"

const Chat = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.npoint.io/b919cb46edac4c74d0a8',
      );

      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header data={data}/>
      <MessageList data={data}/>
      <MessageInput />
    </>
  );
}

export default Chat;
