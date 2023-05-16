import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {mainApi} from "../apiSlice";
import {Message} from "../../types/Message";


type MessagesState = {
    ids: string[]
    entities: {
        [key: string]: Message[]
    }
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState: {ids: [], entities: {}} as MessagesState,
    reducers: {
        createChat: (state, {payload}: PayloadAction<string>) => {

            if (!(state.ids.includes(payload))) {
                state.ids = [...state.ids, payload]
            }
        },
    },
    extraReducers: builder => {
        builder
            .addMatcher(
                mainApi.endpoints.getNotification.matchFulfilled,
                (state, {payload}) => {
                    if (payload?.body?.typeWebhook === "incomingMessageReceived"
                        || payload?.body?.typeWebhook === "outgoingMessageReceived"
                        || payload?.body?.typeWebhook === "outgoingAPIMessageReceived") {

                        const chatId = payload.body.senderData.chatId

                        if (!(state.ids.includes(chatId))) {
                            state.ids = [...state.ids, chatId]
                        }

                        if (chatId in state.entities) {
                            state.entities[chatId] = [...state.entities[chatId], payload.body]
                        } else {
                            state.entities[chatId] = [payload.body]
                        }
                    }
                }
            )
    }
})

export default chatsSlice.reducer


export const {createChat} = chatsSlice.actions


export const selectChatsIds = (state: RootState) => state.chats.ids

export const selectChatsEntities = (state: RootState) => state.chats.entities

export const selectChatById = (state: RootState, id: string) => state.chats.entities[id]
