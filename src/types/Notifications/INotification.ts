import {NotificationType} from "../NotificationType";

export interface INotification {
    "typeWebhook": NotificationType,
    "instanceData": {
        "idInstance": number,
        "wid": string,
        "typeInstance": string
    },
    "timestamp": number,
}