import { useRef, useEffect, useState } from "react";

interface Props {
    width: number;
    height: number;
    canvasRef: React.MutableRefObject<any>;
}

function DrawingBox({ width, height, canvasRef }: Props) {
    const contextRef = useRef(null);
    const [ isDrawing, setIsDrawing ] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        context.lineCap = "round";
        // TODO make this changeable!
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, [ width, height, canvasRef ]);

    const beginDrawing = ({ nativeEvent }) => {
        console.log("BEGIN DRAWING");
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const endDrawing = () => {
        console.log("STOPPED DRAWING");
        contextRef.current.closePath();
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    return (
        <canvas 
        style={{ border: "1px solid black" }}
        onMouseDown={beginDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef} />
    )
}

export default DrawingBox;