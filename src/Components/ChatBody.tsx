import React, {memo} from 'react';
import {useAppSelector} from "../features/store";
import {selectChatById} from "../features/chats/chatsSlice";
import ChatMessage from "./ChatMessage";
import {Typography} from "antd";

const {Text} = Typography;

function ChatBody({chatId}: { chatId: string }) {

    const chat = useAppSelector(state => selectChatById(state, chatId));

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '8px',
            alignContent: 'flex-start',
            background: '#ede9d3',
            flexGrow: '1',
            marginBottom: '16px',
            borderRadius: '10px',
            padding: '8px'
        }}>
            {chat && chat.map((message) => <ChatMessage key={message.idMessage} message={message}/>)}

            {!chatId && <Text style={{textAlign: 'center'}}>Add a chat to start chatting</Text>}
        </div>
    );
}

export default memo(ChatBody);