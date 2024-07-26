import ClearButton from './ClearButton';
import Color from './Color'

interface ColorBarProps {
    canvasRef: React.MutableRefObject<any>;
}

function Toolbar({ canvasRef }: ColorBarProps) {
    // TODO change these colors to the bootstrap colors!
    return (
        <>
            <Color color="#dc3545" canvasRef={canvasRef} />
            <Color color="#fd9843" canvasRef={canvasRef} />
            <Color color="#ffcd39" canvasRef={canvasRef} />
            <Color color="#479f76" canvasRef={canvasRef} />
            <Color color="#3d8bfd" canvasRef={canvasRef} />
            <Color color="#8540f5" canvasRef={canvasRef} />
            <Color color="#432874" canvasRef={canvasRef} />
            <Color color="#6c757d" canvasRef={canvasRef} />
            <Color color="#ffffff" canvasRef={canvasRef} />
            <ClearButton canvasRef={canvasRef} />
        </>
    )
}

export default Toolbar;