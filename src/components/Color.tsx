import { useEffect } from "react";

interface Props {
    color: string;
    canvasRef: React.MutableRefObject<any>;
}

function Color({ color, canvasRef }: Props) {
    const changeColor = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.strokeStyle = color;
    }

    return (
        <button onClick={changeColor}>{color}</button>
    )
}

export default Color;