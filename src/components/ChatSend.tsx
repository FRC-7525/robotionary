import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

interface ChatSendProps {
    username: string;
}

function ChatSend({ username }: ChatSendProps) {
    const [ message, setMessage ] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();
        if (message === "") return;
        push(ref(db, "/messages"), `${username}: ${message}`);
        event.target.reset();
    }

    return (
        <form onSubmit={sendMessage}>
            <input name="message" onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    )
}

export default ChatSend;