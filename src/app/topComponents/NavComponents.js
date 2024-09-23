'use client'

import { useEffect } from "react";
import Link from "next/link";
import { useData } from "./DataContext";
import { useRouter } from "next/navigation";

export default function NavComponents() {

    const router = useRouter()

    const tasksData = useData()

    useEffect(() => {

        router.events?.on('routeChangeComplete', console.log("Haloha"));

        const nav_links = document.getElementsByClassName('nav_links');

        let page_url = window.location.pathname

        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].classList.remove('active')
        }

        for (let i = 0; i < nav_links.length; i++) {
            let elementHref = nav_links[i].getAttribute('href')

            if (elementHref == page_url) {
                nav_links[i].classList.add('active')
                console.log(page_url.trim(), elementHref.trim())
            }
        }

    }, [router])

    return (
        <>
            <nav className="bg-white relative">
                <div className="absolute right-0 top-1 bg-gray-200 z-10 cursor-pointer text-white font-bold h-10 w-3 flex items-center justify-center">
                    {'>'}
                </div>
                <ul className="list-none flex space-x-5 py-3 overflow-x-scroll">

                    <li className="text-center" key={Math.random()}>
                        <Link className="pl-5 active pr-3 relative hover:text-navlinkhover font-bold inline-block text-nowrap nav_links" href="/">
                            Home
                        </Link>

                    </li>

                    {
                        tasksData.map((ele, index) => (
                            <li className="text-center" key={Math.random()}>
                                <Link className="pl-5 pr-3 relative hover:text-navlinkhover font-bold inline-block text-nowrap nav_links" href={ele.dest_link}>
                                    {ele.title}
                                </Link>

                            </li>
                        ))
                    }

                </ul>
            </nav>
        </>
    )
}