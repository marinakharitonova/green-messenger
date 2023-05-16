import {INotification} from "./INotification";

export interface IDeviceInfo extends INotification {
    "typeWebhook": "deviceInfo",
    "deviceData": {
        "platform": string,
        "deviceManufacturer": string,
        "deviceModel": string,
        "osVersion": string,
        "waVersion": string,
        "battery": number
    }
}