import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { useEffect, useState } from "react";

interface ChatListProps {
    height: number;
    width: number;
}

function ChatList({ height, width }: ChatListProps) {
    const [ elements, setElements ] = useState([]);

    const setChat = () => {
        const changeMessages = (snapshot) => {
            let elementList = [];
            snapshot.forEach((snap) => {
                elementList.push(<p>{snap.val()}</p>);
            });

            setElements(elementList.slice(-5));
        }

        onValue(ref(db, "/messages"), changeMessages);
    }

    useEffect(setChat, []);

    return (
        <div className="d-flex justify-content-center">
            <div style={{ border: "2px solid #0D6EFD", borderRadius: "8px", height: `${height}px`, width: `${width}px` }}>
                {elements}
            </div>
        </div>
    )
}

export default ChatList;