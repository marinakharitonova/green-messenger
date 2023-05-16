import {IExtendedTextMessage} from "../Messages/IExtendedTextMessage";
import {IMessageReceived} from "./IMessageReceived";

export interface IOutgoingMessageReceived extends IMessageReceived {
    typeWebhook: "outgoingMessageReceived" | "outgoingAPIMessageReceived",
    messageData: IExtendedTextMessage
}