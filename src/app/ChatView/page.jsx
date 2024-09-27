import {useState} from "react";

export default function ChatView() {
    const [pageNumber, setPageNumber] = useState(0);

    function setPage(pageNumber) {
        setPageNumber(pageNumber);
    }

    return (
        <div className={'chat-view flex bg-blue-950 p-2'}>
            <div className={'flex flex-col basis-1/5 h-96 bg-blue-0 rounded'}>
                <div>
                    <input type={'text'} enterKeyHint={'search'}
                           className={'bg-gray-500 rounded max-w-max m-3 text-blue-950'}/>
                </div>
                <div className={'bg-blue-950 basis-full h-full m-3 overflow-y-scroll'}>

                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => {

                            return (
                                <div key={index} className={'flex bg-transparent rounded shadow p-1.5'}
                                     onClick={() => setPage(index)}>
                                    <div className={'p-2 rounded-full bg-blue-200 w-12 h-12'}></div>
                                    <div className={'p-2 contain-style: text-white items-center'}>
                                        <div className={'text-sm font-bold'}>Idris</div>
                                        <div className={'text-sm'}>Hello Div</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            pageNumber == 2?
            <div className={`flex flex-col basis-4/5 h-96 bg-blue-300 rounded`}>
            </div>: <div className={`flex flex-col basis-4/5 h-96 bg-red-300 rounded`}>
        </div>
        </div>
    )
}