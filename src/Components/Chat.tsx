import React, {useCallback, useEffect, useState} from 'react';
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";
import ChatBody from "./ChatBody";
import {useDeleteNotificationMutation, useGetNotificationQuery} from "../features/apiSlice";
import {useAppDispatch, useAppSelector} from "../features/store";
import {selectApiTokenInstance, selectIdInstance} from "../features/auth/authSlice";
import ChatAdder from "./ChatAdder";
import {createChat} from "../features/chats/chatsSlice";

function Chat() {
    const idInstance = useAppSelector(selectIdInstance)
    const apiTokenInstance = useAppSelector(selectApiTokenInstance)

    const dispatch = useAppDispatch()

    const [chatId, setChatId] = useState('')

    const {data, isSuccess} = useGetNotificationQuery({idInstance: idInstance, apiTokenInstance: apiTokenInstance}, {
        pollingInterval: 5000
    })

    const [deleteNotification] = useDeleteNotificationMutation()

    useEffect(() => {
        if (isSuccess && data) {
            const receiptId = data.receiptId

            try {
                deleteNotification({
                    idInstance: idInstance,
                    apiTokenInstance: apiTokenInstance,
                    receiptId
                }).unwrap()
            } catch (e) {
                console.log(e);
            }

        }
    }, [isSuccess, data, deleteNotification, apiTokenInstance, idInstance])

    const handleChatChange = useCallback((chatId: string) => {
        setChatId(chatId)
    }, [])

    const handleAddChat = useCallback((phone: string) => {
        const chatId = `${phone}@c.us`

        setChatId(chatId)
        dispatch(createChat(chatId))
    }, [dispatch])

    return (
        <div style={{
            display: 'flex',
            maxWidth: '1200px',
            height: 'calc(100vh - 60px)',
            margin: 'auto',
            boxSizing: 'border-box',
            background: '#ffffff',
            padding: '16px'
        }}>
            <div style={{width: '30%', borderRight: '1px solid #ededed', padding: '0 8px'}}>
                <ChatAdder handleAddChat={handleAddChat}/>

                <ChatList handleChatChange={handleChatChange}/>
            </div>
            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 8px'
            }}>

                <ChatBody chatId={chatId}/>

                <MessageForm chatId={chatId}/>
            </div>
        </div>
    );
}

export default Chat;