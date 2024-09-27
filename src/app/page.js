'use client'

import ProjectCard from "./topComponents/projectCard";
import { useData } from "./topComponents/DataContext";
import { Icon } from '@iconify/react';
import BreadCrumb from "./topComponents/BreadCrumb";
import Link from "next/link";

export default function Home() {

    const tasksData = useData()

    return (
        <>
            <div className="px-5 sm:px-10 md:px-10 lg:px-20 py-5">
                <div className="px-5">
                    <ul className="flex gap-2 items-center">
                        <li className="breadcrumb">
                            <Link href="/" className=""><Icon icon="mdi:home-outline" style={{ fontWeight: 'bolder', fontSize: '20px' }} /></Link>
                        </li>
                        <li className=""><Icon icon="mdi:chevron-right" /></li>
                        <li className="">
                            Homepage
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-5 sm:px-10 md:px-10 lg:px-20 mt-0">
                <div className="p-3 flex justify-between">
                    <div className="flex items-center basis-1/3">
                        <select className="border py-2 rounded bg-white px-5">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select>
                        <span>&nbsp; &nbsp; entries per page</span>
                    </div>
                    <input type="text" className="border py-2 px-5 rounded basis-2/3" placeholder="Search..." aria-placeholder="Search..." />
                    <div className="basis-1/3 flex justify-end gap-3 items-center">
                        <button className="border p-3 hover:bg-gray-100 rounded"><Icon icon="mdi:format-list-bulleted" /></button>
                        <button className="border p-3 hover:bg-gray-100 rounded"><Icon icon="mdi:view-grid" /></button>
                    </div>
                </div>
            </div>
            <section className="px-5 sm:px-10 md:px-10 lg:px-20 mt-5">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 px-3">

                    {
                        tasksData.map((ele, index) =>
                            <ProjectCard
                                title={ele.title}
                                desc={ele.desc}
                                author_image={ele.author_image}
                                author_link={ele.author_link}
                                dest_link={ele.dest_link}
                                image={ele.image}
                                key={index}
                            />)
                    }

                </div>

            </section>
        </>
    );
}
