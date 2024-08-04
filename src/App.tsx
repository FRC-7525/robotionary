import { useRef } from 'react';
import DrawingBox from './components/DrawingBox'
import Toolbar from './components/Toolbar';
import ViewBox from './components/ViewBox';
import ChatList from './components/ChatList';
import ChatSend from './components/ChatSend';

function App() {
  const canvasRef = useRef(null);
  return (
    <>
      <ViewBox />
      <DrawingBox width={345} height={345} canvasRef={canvasRef} />
      <ChatList width={317} height={276} />
      <ChatSend username="lucia" />
    </>
  )
}

export default App;