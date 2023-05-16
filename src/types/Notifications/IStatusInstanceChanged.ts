import {INotification} from "./INotification";

export interface IStatusInstanceChanged  extends INotification{
    "typeWebhook": "statusInstanceChanged",
    "statusInstance": "online" | "offline"
}