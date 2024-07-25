import { useRef } from 'react';
import DrawingBox from './components/DrawingBox'
import ClearButton from './components/ClearButton'

function App() {
  // this code lowkey sucks
  const canvasRef = useRef(null);

  return (
    <>
    <DrawingBox width={345} height={345} canvasRef={canvasRef} />
    <ClearButton canvasRef={canvasRef} />
    </>
  )
}

export default App;