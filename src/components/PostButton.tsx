import { useEffect } from "react"

interface Props {
    canvasRef: React.MutableRefObject<any>;
}

function PostButton({ canvasRef }: Props) {
    const post = () => {
        const imgData = canvasRef.current.getContext("2d").getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        fetch("http://localhost:5000/drawing", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: `{ "height": ${imgData.height}, "width": ${imgData.width}, "data": [ ${imgData.data} ] }`
        })
    }

    const get = () => {
        fetch("http://localhost:5000/drawing")
            .then((response) => response.json())
            .then((json) => new ImageData(new Uint8ClampedArray(json.data), json.width, json.height))
            .then((data) => canvasRef.current.getContext("2d").putImageData(data, 0, 0))
    }

    return (
        <>
        <button onClick={get}>load</button>
        <button onClick={post}>save</button>
        </>
    )
}

export default PostButton;