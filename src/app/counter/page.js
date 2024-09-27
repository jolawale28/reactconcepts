'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import logo from '../../assets/img/phone_mockup.webp'
import Image from "next/image";

export default function Counter() {
    const [count, setCount] = useState(0)

    const change = (amount) => {
        setCount(count + amount);
    }

    const decrement = () => {
        setCount(count - amount);
    }

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
                            Counter
                        </li>
                        <li className=""><Icon icon="mdi:chevron-right" /></li>
                        <li className="" style={{ fontSize: '12px' }}>Build a simple counter that increments whenever a button is clicked.</li>
                    </ul>
                </div>
            </div>

            <div className={`flex items-start justify-center mt-5 gap-10 px-5 sm:px-10 md:px-10 lg:px-20`}>
                
                <div className="basis-3/4">
                    <div className="relative">
                        <Image src={logo} className="w-3/5" alt="Phone Mockup" />
                        <div className="top-40 left-52 absolute w-72">
                            <div className="text-2xl mb-5 font-extrabold">Description</div>

                            <p>
                                nbsjhbfwejfb weblwrhwerlhwrhlwek wejlwk
                                shfbwhkrjwhjwb ebtejrbukerjhr kyger
                                srjkeh gbe hujkgeh graydrjbke rkte hgi eghe h
                            </p>
                        </div>
                        <div className="flex items-center justify-center absolute top-2/4 left-56">
                            <button className="border border-r-0 border-gray-200 h-10 w-10 flex items-center justify-center transition-colors duration-500 rounded-s text-2xl bg-gray-100 hover:bg-gray-200" onClick={() => change(-1)}>-</button>
                            <input className="border border-gray-200 text-center text-xl h-10 w-40" defaultValue={count} />
                            <button className="border border-l-0 border-gray-200 bg-gray-100 h-10 w-10 flex items-center transition-colors duration-500 justify-center rounded-e text-2xl hover:bg-gray-200" onClick={() => change(1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
