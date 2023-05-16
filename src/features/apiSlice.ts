import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IInstance} from "../types/IInstance";
import {IDeviceInfo} from "../types/Notifications/IDeviceInfo";
import {IIncomingCall} from "../types/Notifications/IIncomingCall";
import {IOutgoingMessageStatus} from "../types/Notifications/IOutgoingMessageStatus";
import {IStatusInstanceChanged} from "../types/Notifications/IStatusInstanceChanged";
import {IStateInstanceChanged} from "../types/Notifications/IStateInstanceChanged";
import {IIncomingMessageReceived} from "../types/Notifications/IIncomingMessageReceived";
import {IOutgoingMessageReceived} from "../types/Notifications/IOutgoingMessageReceived";

interface IDeleteNotificationRequest {
    receiptId: number
    idInstance: number
    apiTokenInstance: string
}

interface ISendMessageRequest {
    chatId: string
    message: string
    idInstance: number
    apiTokenInstance: string
}

type Notification =
    IDeviceInfo
    | IIncomingCall
    | IIncomingMessageReceived
    | IOutgoingMessageReceived
    | IOutgoingMessageStatus
    | IStatusInstanceChanged
    | IStateInstanceChanged

type NotificationResponse = {
    receiptId: number,
    body: Notification
}

export const mainApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.green-api.com/'}),
    tagTypes: ['Notification'],
    endpoints: (builder) => ({
        getNotification: builder.query<NotificationResponse, IInstance>({
            query: (arg) => `waInstance${arg.idInstance}/ReceiveNotification/${arg.apiTokenInstance}`,
            providesTags: ['Notification'],
        }),
        sendMessage: builder.mutation<{ idMessage: string }, ISendMessageRequest>({
            query: (arg) => ({
                url: `waInstance${arg.idInstance}/SendMessage/${arg.apiTokenInstance}`,
                method: 'POST',
                body: {
                    chatId: arg.chatId,
                    message: arg.message
                }
            }),
            invalidatesTags: ['Notification']
        }),
        deleteNotification: builder.mutation<{ result: boolean }, IDeleteNotificationRequest>({
            query: (arg) => ({
                url: `waInstance${arg.idInstance}/DeleteNotification/${arg.apiTokenInstance}/${arg.receiptId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Notification']
        }),
    }),
})

export const {
    useGetNotificationQuery,
    useSendMessageMutation,
    useDeleteNotificationMutation
} = mainApi


