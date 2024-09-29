export default function ChatListTile({name, message, image, messageId}) {
    return (
        <div key={messageId} className={'flex bg-transparent rounded shadow p-1.5'}>
            <div className={'p-2 rounded-full bg-blue-200 w-12 h-12'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={name}/>
            </div>

            <div className={'p-2 contain-style: text-white items-center'}>
                <div className={'text-sm font-bold'}>{name}</div>
                <div className={'text-sm'}>{message}</div>
            </div>
        </div>
    )
}