class MessageModel {
    constructor(id, name, email, message, timestamp) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.timestamp = timestamp;
    }
}

const messagesArray = [
    new MessageModel('123245', 'Idris Adedeji', 'ayblazz@gmail.com', 'Hi Idris rdkdrjfb akejnnfiu oiuaeGFI OUAehgfi uaEGF9 OAIUEhaf9IH UOEGHFIYAY UASHGFGR AUOIHRF9P OAIUHPOFEI OIusheFI OAHEFEI BOAHFIO AEBFIO uwhe9f iwihroif o9ahrwef9iw worehft9 owehrf9 asisfb', '12:00 pm'),
    new MessageModel('034852', 'Prime', 'prime@gmail.com', 'Hi Prime', '1:00 am'),
    new MessageModel('13243', 'Idris Adedeji', 'ayblazz@gmail.com', 'What\'s up nigga', '1:30 am')
]

export {messagesArray, MessageModel}