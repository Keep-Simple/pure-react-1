import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import jsonData from "./mock/MOCK_DATA.json"

const Chat = () => {

  const [store, setStore] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios(
    //     'https://api.npoint.io/b919cb46edac4c74d0a8',
    //   );
    //
    // };
    setStore(jsonData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    // fetchData();
  }, []);


  return (
    <>
      <Header data={store}/>
      <MessageList data={store} editData={setStore}/>
      <MessageInput data={store} addData={setStore}/>
    </>
  );
}

export default Chat;
