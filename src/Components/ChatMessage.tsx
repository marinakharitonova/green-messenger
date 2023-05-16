import React from 'react';
import {Typography} from 'antd';
import {Message} from "../types/Message";

const {Text} = Typography;

type ChatMessageProps = {
    message: Message
}

function ChatMessage({message}: ChatMessageProps) {

    let messageText = ''
    if (message.messageData.typeMessage === 'textMessage') {
        messageText = message.messageData.textMessageData.textMessage
    } else if (message.messageData.typeMessage === 'extendedTextMessage') {
        messageText = message.messageData.extendedTextMessageData.text
    }

    return (
        <div style={{
            padding: '4px 8px',
            background: '#ffffff',
            borderRadius: '10px',
            justifySelf: message.typeWebhook === 'incomingMessageReceived' ? 'flex-start' : 'flex-end'
        }}>
            <Text style={{margin: 0}}>{messageText}</Text>
        </div>
    );
}

export default ChatMessage;