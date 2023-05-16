import {INotification} from "./INotification";

export interface IStateInstanceChanged extends INotification {
    "typeWebhook": "stateInstanceChanged",
    "stateInstance": "notAuthorized" | "authorized" | "blocked" | "sleepMode" | "starting"
}