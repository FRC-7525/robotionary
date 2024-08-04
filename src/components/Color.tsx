interface Props {
    color: string;
    width: number;
    height: number;
    borderRadius: number;
    canvasRef: React.MutableRefObject<any>;
}

function Color({ color, width, height, borderRadius, canvasRef }: Props) {
    const changeColor = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.strokeStyle = color;
    }

    return (
        <button onClick={changeColor}
        type="button"
        className="btn btn-circle btn-xl"
        style={{ backgroundColor: color, color: color, borderRadius: `${borderRadius}px`, borderColor: "black", borderWidth: '2px', width: `${width}px`, height: `${height}px` }} />
    ) 
}

export default Color;