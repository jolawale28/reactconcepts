import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectCard({title, desc, dest_link, author_link, author_image, image}) {

    const router = useRouter()

    return (
        <>
            <div className="rounded group cursor-pointer shadow" onClick={(e) => router.push(dest_link)}>
                <div className="h-40 p-2 pb-0 relative">
                    <div className="h-full rounded-t overflow-hidden bg-gray-50">
                        <img className="group-hover:scale-110 transition-transform duration-1000 object-cover h-full w-full" src={image} alt={title.slice(0, 7)} />
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