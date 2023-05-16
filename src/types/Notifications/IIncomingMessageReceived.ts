import {IMessageReceived} from "./IMessageReceived";
import {ITextMessage} from "../Messages/ITextMessage";

export interface IIncomingMessageReceived extends IMessageReceived {
    typeWebhook: "incomingMessageReceived",
    messageData: ITextMessage
}