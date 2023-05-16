import {INotification} from "./INotification";

export interface IMessageReceived extends INotification {
    typeWebhook: "incomingMessageReceived" | "outgoingMessageReceived" | "outgoingAPIMessageReceived",
    idMessage: string,
    senderData: {
        "chatId": string,
        "sender": string,
        "chatName": string,
        "senderName": string
    },
    messageData: unknown
}
