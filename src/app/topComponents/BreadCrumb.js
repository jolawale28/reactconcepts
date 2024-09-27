import { Icon } from "@iconify/react";
import Link from "next/link";
import { useData } from "./DataContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BreadCrumb( ) {

    const pathname = usePathname()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const tasksData = useData()

    useEffect(() => {

        let task = tasksData.find((ele) => ele.dest_link == pathname)

        if (task != undefined) {
            setTitle(task.title)
            setDesc(task.desc)
        }

    })

    return (
        <div className="px-5 sm:px-10 md:px-10 lg:px-20 py-5">
            <div className="px-5">
                <ul className="flex gap-2 items-center">
                    <li className="breadcrumb">
                        <Link href="/" className=""><Icon icon="mdi:home-outline" style={{ fontWeight: 'bolder', fontSize: '20px' }} /></Link>
                    </li>
                    <li className=""><Icon icon="mdi:chevron-right" /></li>
                    <li className="">
                        {title}
                    </li>
                    <li className=""><Icon icon="mdi:chevron-right" /></li>
                    <li className="" style={{ fontSize: '12px' }}>{desc}</li>
                </ul>
            </div>
        </div>
    )
}