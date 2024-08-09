import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawingBox from './components/DrawingBox'
import Toolbar from './components/Toolbar';
import TitleScreen from './components/TitleScreen';

function App() {
  const canvasRef = useRef(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleScreen />}> </Route>
        <Route path="drawing" element={
          <>
            <DrawingBox width={345} height={345} canvasRef={canvasRef} />
            <Toolbar canvasRef={canvasRef} />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
