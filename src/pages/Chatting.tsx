import ViewBox from '../components/ViewBox';
import ChatList from '../components/ChatList';
import ChatSend from '../components/ChatSend';

function Chatting() {
  return (
    <>
      <ViewBox />
      <ChatList width={317} height={276} />
      <ChatSend username="lucia" />
    </>
  )
}

export default Chatting;