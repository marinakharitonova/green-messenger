export interface IExtendedTextMessage {
    typeMessage: "extendedTextMessage"
    extendedTextMessageData: {
        text: string,
        description: string,
        title: string,
        previewType: string,
        jpegThumbnail: string
    }
}