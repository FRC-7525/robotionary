import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { useEffect, useRef, useState } from "react";

function ViewBox() {
    const canvasRef = useRef(null);
    const [ img, setImg ] = useState(new Image());
    useEffect(() => {
        const changeDrawing = (snapshot) => {
            const image = new Image();
            image.src = snapshot.val();
            setImg(image);
        }
        
        onValue(ref(db, "/drawing"), changeDrawing);
    }, [ setImg ]);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = 345;
        canvas.height = 345;

        requestAnimationFrame(() => {
            context.drawImage(img, 0, 0);
        })
    }, [ img ]);

    return (
        <div className="d-flex justify-content-center">
            <canvas ref={canvasRef} style={{border: '1px solid black', borderRadius: '7px' }}/>
        </div>
    )
}

export default ViewBox;