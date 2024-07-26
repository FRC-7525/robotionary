import ClearButton from './ClearButton';
import Color from './Color'

interface ColorBarProps {
    canvasRef: React.MutableRefObject<any>;
}

function Toolbar({ canvasRef }: ColorBarProps) {
    // TODO change these colors to the bootstrap colors!
    return (
        // theres def a better way to do this lol
        <center>
            <div className="d-flex justify-content-between" style={{ width: `345px`, paddingTop: '4px' }}>
                <Color color="#dc3545" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#ffcd39" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#fd9843" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#479f76" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#3d8bfd" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#8540f5" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#432874" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#6c757d" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <Color color="#000000" width={29} height={29} borderRadius={14} canvasRef={canvasRef} />
                <ClearButton canvasRef={canvasRef} />
            </div>
        </center>
    )
}

export default Toolbar;