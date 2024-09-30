'use client'

import ProjectCard from "./topComponents/projectCard";
import { useData } from "./topComponents/DataContext";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

export default function Home() {

    const [apps, setApps] = useState([])

    const tasksData = useData()

    const [searchInput, setSearchInput] = useState('')

    const filteredApps = apps.filter((item) =>
        (item.title).toLowerCase().includes(searchInput.toLowerCase()) ||
        (item.desc).toLowerCase().includes(searchInput.toLowerCase())
    )

    useEffect(() => {
        setApps(tasksData)

        console.log(filteredApps)
    }, [searchInput])

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
                <div className="p-3 flex gap-4 md:gap-y-4 sm:gap-y-4 lg:gap-y-0 justify-between md:flex-col sm:flex-col lg:flex-row flex-col">
                    <div className="flex items-center basis-1/3 ">
                        <select className="border py-2 rounded bg-white px-5">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select>
                        <span className="text-gray-500 text-sm">&nbsp; &nbsp; entries per page</span>
                    </div>
                    <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" className="border py-2 px-5 rounded basis-2/3" placeholder="Search..." aria-placeholder="Search..." />
                    <div className="basis-1/3 flex justify-end gap-3 items-center">
                        <button className="border p-3 hover:bg-gray-100 rounded"><Icon icon="mdi:format-list-bulleted" /></button>
                        <button className="border p-3 hover:bg-gray-100 rounded"><Icon icon="mdi:view-grid" /></button>
                    </div>
                </div>
            </div>
            <section className="px-5 sm:px-10 md:px-10 lg:px-20 mt-5">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 px-3">

                    {
                        filteredApps.map((ele, index) =>
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

            <section className="px-5 sm:px-10 md:px-10 lg:px-20 mt-5">
                <div className="px-3">

                    <Table removeWrapper aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn style={{ width: '10%' }}>AVATAR</TableColumn>
                            <TableColumn>TITLE</TableColumn>
                            <TableColumn>DESCRIPTION</TableColumn>
                            <TableColumn>AUTHOR</TableColumn>
                            <TableColumn>DATE ADDED</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredApps.map((ele) => (
                                    <TableRow key="1">
                                        <TableCell>
                                            <img className="group-hover:scale-110 transition-transform duration-1000 object-cover h-14 w-14 rounded" src={ele.image} alt={'app_icon'} />
                                        </TableCell>
                                        <TableCell>{ele.title}</TableCell>
                                        <TableCell>{ele.desc}</TableCell>
                                        <TableCell>
                                            <Tooltip content={ele.author_name}>
                                                <img className="group-hover:scale-110 transition-transform duration-1000 object-cover h-10 w-10 rounded" src={ele.author_image} alt={'author_image'} />
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}
