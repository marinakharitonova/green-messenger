import {INotification} from "./INotification";

export interface IOutgoingMessageStatus extends INotification {
    "typeWebhook": "outgoingMessageStatus",
    "chatId": string,
    "idMessage": string,
    "status": string,
    "sendByApi": boolean
}