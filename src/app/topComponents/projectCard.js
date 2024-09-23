import Link from "next/link";

export default function ProjectCard({title, desc, dest_link, author_link, author_image, image}) {

    return (
        <>
            <div className="rounded group cursor-pointer shadow">
                <div className="h-40 p-2 pb-0 relative">
                    <div className="h-full rounded-t overflow-hidden bg-gray-900">
                        <img className="group-hover:scale-110 transition-transform duration-1000" src={image} alt="caption"/>
                    </div>
                    <div className="absolute right-5 top-5">
                        <Link href={`${author_link}`} className="">
                            <img src={`${author_image}`} style={{ width: '30px', height: '30px' }} alt = "image" />
                        </Link>
                    </div>
                </div>
                <div className="px-5 py-3">
                    <div className="mb-2">
                        <Link href={`${dest_link}`} className="text-xl group-hover:text-navlinkhover">{title}</Link>
                    </div>
                    <p className="text-sm">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}