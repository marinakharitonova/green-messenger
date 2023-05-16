import {IIncomingMessageReceived} from "./Notifications/IIncomingMessageReceived";
import {IOutgoingMessageReceived} from "./Notifications/IOutgoingMessageReceived";

export type Message = IIncomingMessageReceived | IOutgoingMessageReceived