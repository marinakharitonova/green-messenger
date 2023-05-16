import React, {memo} from 'react';
import {useAppSelector} from "../features/store";
import {selectChatsIds} from "../features/chats/chatsSlice";
import ChatItem from "./ChatItem";

type ChatListProps = {
    handleChatChange: (chatId: string) => void
}

function ChatList({handleChatChange}: ChatListProps) {
    const chatIds = useAppSelector(selectChatsIds);

    return (
        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
            {chatIds.map(id => <ChatItem key={id}
                                         chatId={id as string}
                                         handleChatChange={handleChatChange}
            />)}
        </ul>
    );
}

export default memo(ChatList);