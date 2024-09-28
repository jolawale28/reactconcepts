'use client'

import {useState} from "react";
import ChatListTile from "@/app/ChatView/ChatComp/chat_listtile";

export default function ChatView() {
    const [pageNumber, setPageNumber] = useState(0);

    const allNames = [
        {'name': 'Idris Adedeji', 'profilePics': 'google.com', 'lastMessage': 'Hello Olaiya'},
        {'name': 'Abass Abdullah', 'profilePics': 'google.com', 'lastMessage': 'Hello Idris'},
        {'name': 'Olaiya Abdul-Malik', 'profilePics': 'google.com', 'lastMessage': 'Hello Abass'},
        {'name': 'Tope Joseph', 'profilePics': 'google.com', 'lastMessage': 'Hello Adedeji'},
    ];

    function setPage(pageNumber) {
        setPageNumber(pageNumber);
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
            </div>
        </div>
    )
}