'use client'

import {useState} from "react";
import ChatListTile from "@/app/ChatView/ChatComp/chat_listtile";
import {messagesArray} from "@/app/ChatView/ChatComp/MessageModel";

export default function ChatView() {
    const [pageNumber, setPageNumber] = useState(0);
    const [currentMessage, setCurrentMessage] = useState('');

    const allNames = [
        {
            'name': 'Idris Adedeji',
            'profilePics': 'https://xsgames.co/randomusers/avatar.php?g=male',
            'lastMessage': 'Hello Olaiya'
        },
        {'name': 'Abass Abdullah', 'profilePics': 'google.com', 'lastMessage': 'Hello Idris'},
        {'name': 'Olaiya Abdul-Malik', 'profilePics': 'google.com', 'lastMessage': 'Hello Abass'},
        {'name': 'Tope Joseph', 'profilePics': 'google.com', 'lastMessage': 'Hello Adedeji'},
    ];


    const onChangeText = (value) => {
        setCurrentMessage(value);
    }

    const addMessage = () => {

        allMessages.push(currentMessage);
    }

    return (
        <div className={'chat-view flex bg-blue-950 p-2'}>
            <div className={'flex flex-col basis-1/5 h-96 bg-blue-0 rounded'}>
                <div>
                    <input type={'text'} enterKeyHint={'search'} placeholder={'Search...'}
                           className={'bg-blue-300 rounded-xl max-w-max m-3 text-blue-950 p-1.5'}/>
                </div>
                <div className={'bg-blue-950 basis-full h-full m-3 overflow-y-scroll'}>
                    {
                        allNames.map((item, index) => {
                            return <div key={index}>
                                <ChatListTile name={item.name} message={item.lastMessage} messageId={index}
                                              image={item.profilePics}></ChatListTile>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={`flex flex-col basis-4/5 h-96 bg-blue-300 rounded`}>
                <div className={`h-16 basic-full bg-blue-200 p-3 flex`}>
                    <div className={`rounded-full w-12 h-12 bg-amber-700`}></div>
                    <div className={`pl-3`}>
                        <div className={` font-bold`}>Idris</div>
                        <div className={`text-gray-800 `}>Last seen 1:20pm</div>
                    </div>

                </div>
                <div className={`h-full w-full overflow-y-scroll flex flex-col gap-2`}>
                    {messagesArray.map((m, index) => {
                        let message = m.message;
                        let messageId = m.id;
                        let name = m.name;
                        let email = m.email;
                        return (
                            <div key={messageId}
                                 className={`p-2 rounded-b-2xl rounded-r-2xl bg-blue-950 text-white w-64 sm:w-full md:w-64 lg:w-60`}>{message}
                            </div>
                        );
                    })}


                </div>
                <div className={`h-16 basic-full rounded-full bg-blue-200 ml-4 mr-4 mt-2 p-3`}>
                    <input type={'text'} enterKeyHint={'send'} placeholder={'Type your message...'}
                           value={onChangeText}
                           onChange={(message) => {
                               addMessage();
                           }}
                           className={`w-full bg-transparent`}
                    />
                </div>
            </div>
        </div>
    )
}