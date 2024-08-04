import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { set, ref } from "firebase/database";

interface DrawingBoxProps {
    width: number;
    height: number;
    canvasRef: React.MutableRefObject<any>;
}

function DrawingBox({ width, height, canvasRef }: DrawingBoxProps) {
    const contextRef = useRef(null);
    const [ isDrawing, setIsDrawing ] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, [ width, height, canvasRef ]);

    const beginDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const endDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

        const imgData = canvasRef.current.toDataURL("image/png");
        set(ref(db, "/drawing"), imgData)
    }

    return (
        <div className="d-flex justify-content-center" style={{ paddingTop: '47px', borderRadius: '2px' }}>
            <canvas            
            style={{ border: "1px solid black" }}
            onMouseDown={beginDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onMouseOut={endDrawing}
            ref={canvasRef} />
        </div>
    )
}

export default DrawingBox;