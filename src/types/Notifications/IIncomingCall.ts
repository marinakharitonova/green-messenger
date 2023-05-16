import {INotification} from "./INotification";

export interface IIncomingCall extends INotification {
    "from": string,
    "typeWebhook": "incomingCall",
    "idMessage": string
}