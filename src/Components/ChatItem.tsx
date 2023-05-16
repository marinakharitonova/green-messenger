import React from 'react';

type ChatItemProps = {
    chatId: string
    handleChatChange: (chatIs: string) => void
}

function ChatItem({chatId, handleChatChange}: ChatItemProps) {

    const handleClick = () => {
        handleChatChange(chatId)
    }

    return (
        <li onClick={handleClick} style={{padding: '8px 0', borderBottom: '1px solid #ededed', cursor: 'pointer'}}>
            {chatId.match(/\d+/)}
        </li>
    );
}

export default ChatItem;